#include <stdio.h>
#include <stdlib.h>
#include <inttypes.h>
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
    const int sfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sfd < 0) {
        puts("socket creation failed");
        exit(1);
    }

    const struct sockaddr_in server_addr = {.sin_family = AF_INET,
                                            .sin_addr.s_addr =
                                                htonl(INADDR_ANY),
                                            .sin_port = htons(port)};
    if (bind(sfd, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
        puts("bind failed");
        exit(1);
    }

    if (listen(sfd, 64) < 0) {
        puts("listen failed");
        exit(1);
    }

    puts("listening for incoming connections");

    struct sockaddr_in address;
    socklen_t addr_len = sizeof(address);
    int cfd;
    if ((cfd = accept(sfd, (struct sockaddr *)&address, &addr_len)) < 0) {
        puts("accept failed");
        exit(1);
    }

    puts("accepted connection");

    return cfd;
}

double current_time_in_seconds() {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return ts.tv_sec + ts.tv_nsec / 1e9;
}

int main(int argc, char** argv) {
    printf("Starting TCP server...\n");
    if (argc < 6) {
        fprintf(stderr, "Usage: %s <address> <port> <n_rounds> <n_bytes> <is_hermit>\n", argv[0]);
        return 1;
    }

    struct Config config = parse_args(argc, argv);
    int n_bytes = config.n_bytes;
    int tot_bytes = 0;

    char* buf = (char*)malloc(n_bytes);

    int sock = server_listen_and_get_first_connection(config.port);
    if (sock >= 0) {
        double start = current_time_in_seconds();
        for (int i = 0; i < config.n_rounds; ++i) {
            ssize_t result = read(sock, buf, n_bytes);
            if (result < 0) {
                perror("read");
                free(buf);
                close(sock);
                return 1;
            }
            tot_bytes += result;
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
