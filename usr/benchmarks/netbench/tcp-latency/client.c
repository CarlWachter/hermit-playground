#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <errno.h>
#include <time.h>
#include "../../bench_output.h"

double get_percentile(double* latencies, size_t count, double percentile);

struct Config {
    char* address;
    int port;
    int n_rounds;
    int n_bytes;
    int is_hermit;
};

struct Config parse_args(int argc, char** argv) {
    struct Config config;
    config.address = argv[1];
    config.port = atoi(argv[2]);
    config.n_rounds = atoi(argv[3]);
    config.n_bytes = atoi(argv[4]);
    config.is_hermit = atoi(argv[5]) == 1;
    return config;
}

int client_connect(const char* address, int port) {
    int sock = socket(AF_INET, SOCK_STREAM, 0);
    if (sock < 0) {
        perror("socket");
        return -1;
    }

    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(port);

    if (inet_pton(AF_INET, address, &server_addr.sin_addr) <= 0) {
        perror("inet_pton");
        close(sock);
        return -1;
    }

    if (connect(sock, (struct sockaddr*)&server_addr, sizeof(server_addr)) < 0) {
        perror("connect");
        close(sock);
        return -1;
    }

    return sock;
}

void close_connection(int sock) {
    close(sock);
}

int main(int argc, char** argv) {
    if (argc < 6) {
        fprintf(stderr, "Usage: %s <address> <port> <n_rounds> <n_bytes> <is_hermit>\n", argv[0]);
        return 1;
    }

    struct Config config = parse_args(argc, argv);

    printf("Connecting to the server %s:%d...\n", config.address, config.port);
    int n_rounds = config.n_rounds;
    int n_bytes = config.n_bytes;

    int sock = client_connect(config.address, config.port);
    if (sock >= 0) {
        printf("Connection established! Ready to send...\n");

        char* buf = (char*)malloc(n_bytes);
        memset(buf, 0, n_bytes);

        double latencies[n_rounds];

        for (int i = 0; i < n_rounds; ++i) {
            struct timespec start, end;
            clock_gettime(CLOCK_MONOTONIC, &start);

            ssize_t bytes_written = write(sock, buf, n_bytes);
            ssize_t bytes_read = read(sock, buf, n_bytes);

            clock_gettime(CLOCK_MONOTONIC, &end);

            long seconds = end.tv_sec - start.tv_sec;
            long nanoseconds = end.tv_nsec - start.tv_nsec;
            double duration = seconds * 1e9 + nanoseconds; // duration in nanoseconds

            latencies[i] = duration;
        }

        double percentile_95 = get_percentile(latencies, n_rounds, 0.95);
        double max_latency = get_percentile(latencies, n_rounds, 1.0);

        // Log benchmark data
        if (config.is_hermit) {
            log_benchmark_data("95th percentile UDP Server Latency", "ns", percentile_95);
            log_benchmark_data("Max UDP Server Latency", "ns", max_latency);
        }else{
            log_benchmark_data("95th percentile UDP Client Latency", "ns", percentile_95);
            log_benchmark_data("Max UDP Client Latency", "ns", max_latency);
        }
        
        free(buf);
        close_connection(sock);
        printf("Sent everything!\n");
    } else {
        printf("Couldn't connect to server...\n");
    }

    return 0;
}

int compare(const void* a, const void* b) {
    double diff = *(double*)a - *(double*)b;
    return (diff > 0) - (diff < 0);
}

double get_percentile(double* latencies, size_t count, double percentile) {
    qsort(latencies, count, sizeof(double), compare);
    size_t index = (size_t)(percentile * (count - 1));
    return latencies[index];
}
