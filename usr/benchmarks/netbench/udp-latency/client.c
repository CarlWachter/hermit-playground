#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <time.h>
#include "../../bench_output.h"

struct Config {
    char* address;
    int port;
    int n_rounds;
    int n_bytes;
    int is_hermit;
};

// Function to parse command line arguments
struct Config parse_args(int argc, char* argv[]) {
    struct Config config;
    if (argc < 5) {
        fprintf(stderr, "Usage: %s <address> <port> <n_rounds> <n_bytes>\n", argv[0]);
        exit(EXIT_FAILURE);
    }
    config.address = argv[1];
    config.port = atoi(argv[2]);
    config.n_rounds = atoi(argv[3]);
    config.n_bytes = atoi(argv[4]);
    config.is_hermit = atoi(argv[5]) == 1;
    return config;
}

double get_percentile(double* latencies, size_t count, double percentile);

int main(int argc, char* argv[]) {
    struct Config args = parse_args(argc, argv);

    printf("[CLIENT]Connecting to the server %s:%d...\n", args.address, args.port);

    int n_rounds = args.n_rounds;
    int n_bytes = args.n_bytes;

    int sockfd;
    struct sockaddr_in servaddr, cliaddr;

    // Create UDP socket
    if ((sockfd = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0) {
        perror("socket creation failed");
        exit(EXIT_FAILURE);
    }

    memset(&cliaddr, 0, sizeof(cliaddr));
    memset(&servaddr, 0, sizeof(servaddr));

    servaddr.sin_family = AF_INET;
    if (inet_pton(AF_INET, args.address, &servaddr.sin_addr) <= 0) {
        perror("inet_pton failed");
        close(sockfd);
        exit(EXIT_FAILURE);
    }
    servaddr.sin_port = htons(args.port);

    cliaddr.sin_family = AF_INET;
    cliaddr.sin_addr.s_addr = htonl(INADDR_ANY); // Bind to any address
    cliaddr.sin_port = htons(0);                 // Bind to any available port

    if (bind(sockfd, (const struct sockaddr*)&cliaddr, sizeof(cliaddr)) < 0) {
        perror("bind failed");
        close(sockfd);
        exit(EXIT_FAILURE);
    }

    // Create buffers to read/write
    char* wbuf = (char*)malloc(n_bytes);
    char* rbuf = (char*)malloc(n_bytes);

    printf("[CLIENT]Socket open! Ready to send...\n");

    double latencies[n_rounds];
    int progress_tracking_percentage = n_rounds / 100;

    for (int i = 0; i < n_rounds; ++i) {
        struct timespec start, end;
        clock_gettime(CLOCK_MONOTONIC, &start);

        if (sendto(sockfd, wbuf, n_bytes, 0, (struct sockaddr*)&servaddr, sizeof(servaddr)) < 0) {
            perror("sendto");
            return 1;
        }

        if (recvfrom(sockfd, rbuf, n_bytes, 0, NULL, NULL) < 0) {
            perror("recvfrom");
            return 1;
        }

        clock_gettime(CLOCK_MONOTONIC, &end);

        long seconds = end.tv_sec - start.tv_sec;
        long nanoseconds = end.tv_nsec - start.tv_nsec;
        double duration = seconds * 1e9 + nanoseconds; // duration in nanoseconds

        latencies[i] = duration;

        if (i % progress_tracking_percentage == 0) {
            printf("%d%% completed\n", (i / progress_tracking_percentage));
        }
    }

    close(sockfd);

    double percentile_95 = get_percentile(latencies, n_rounds, 0.95);
    double max_latency = get_percentile(latencies, n_rounds, 1.0);

    // Log benchmark data
    if (args.is_hermit) {
        log_benchmark_data("95th percentile UDP Server Latency", "ns", percentile_95);
        log_benchmark_data("Max UDP Server Latency", "ns", max_latency);
    }else{
        log_benchmark_data("95th percentile UDP Client Latency", "ns", percentile_95);
        log_benchmark_data("Max UDP Client Latency", "ns", max_latency);
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
