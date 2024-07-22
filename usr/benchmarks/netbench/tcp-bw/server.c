#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <errno.h>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <time.h>
#include "../../bench_output.h"

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

int server_listen_and_get_first_connection(int port) {
    int server_sock = socket(AF_INET, SOCK_STREAM, 0);
    if (server_sock < 0) {
        perror("socket");
        return -1;
    }

    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(port);

    if (bind(server_sock, (struct sockaddr*)&server_addr, sizeof(server_addr)) < 0) {
        perror("bind");
        close(server_sock);
        return -1;
    }

    if (listen(server_sock, 1) < 0) {
        perror("listen");
        close(server_sock);
        return -1;
    }

    struct sockaddr_in client_addr;
    socklen_t client_addr_len = sizeof(client_addr);
    int client_sock = accept(server_sock, (struct sockaddr*)&client_addr, &client_addr_len);
    if (client_sock < 0) {
        perror("accept");
        close(server_sock);
        return -1;
    }

    close(server_sock);
    return client_sock;
}

void setup(const struct Config* config, int sock) {
    // Placeholder for any setup code, if needed.
}

double current_time_in_seconds() {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return ts.tv_sec + ts.tv_nsec / 1e9;
}

int main(int argc, char** argv) {
    if (argc < 6) {
        fprintf(stderr, "Usage: %s <address> <port> <n_rounds> <n_bytes> <is_hermit>\n", argv[0]);
        return 1;
    }

    struct Config config = parse_args(argc, argv);
    int n_bytes = config.n_bytes;
    int tot_bytes = config.n_rounds * config.n_bytes;

    char* buf = (char*)malloc(n_bytes);

    int sock = server_listen_and_get_first_connection(config.port);
    if (sock >= 0) {
        setup(&config, sock);

        double start = current_time_in_seconds();
        for (int i = 0; i < config.n_rounds; ++i) {
            ssize_t bytes_read = 0;
            while (bytes_read < n_bytes) {
                ssize_t result = read(sock, buf + bytes_read, n_bytes - bytes_read);
                if (result < 0) {
                    perror("read");
                    free(buf);
                    close(sock);
                    return 1;
                }
                bytes_read += result;
            }
        }
        double end = current_time_in_seconds();
        double duration = end - start;

        if (config.is_hermit) {
            log_benchmark_data("TCP server", "Mbit/s", (tot_bytes * 8.0) / (1024.0 * 1024.0 * duration));
        } else {
            log_benchmark_data("TCP client", "Mbit/s", (tot_bytes * 8.0) / (1024.0 * 1024.0 * duration));
        }

        free(buf);
        close(sock);
    } else {
        printf("Couldn't connect to server...\n");
    }

    return 0;
}
