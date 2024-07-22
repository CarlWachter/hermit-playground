#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <errno.h>

struct Config {
    char* address;
    int port;
    int n_rounds;
    int n_bytes;
};

struct Config parse_args(int argc, char** argv) {
    struct Config config;
    config.address = argv[1];
    config.port = atoi(argv[2]);
    config.n_rounds = atoi(argv[3]);
    config.n_bytes = atoi(argv[4]);
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

void setup(const struct Config* config, int sock) {
    // Placeholder for any setup code, if needed.
}

void close_connection(int sock) {
    close(sock);
}

int main(int argc, char** argv) {
    if (argc < 5) {
        fprintf(stderr, "Usage: %s <address> <port> <n_rounds> <n_bytes>\n", argv[0]);
        return 1;
    }

    struct Config config = parse_args(argc, argv);

    printf("Connecting to the server %s:%d...\n", config.address, config.port);
    int n_rounds = config.n_rounds;
    int n_bytes = config.n_bytes;

    int sock = client_connect(config.address, config.port);
    if (sock >= 0) {
        setup(&config, sock);
        printf("Connection established! Ready to send...\n");

        char* buf = (char*)malloc(n_bytes);
        memset(buf, 0, n_bytes);

        for (int i = 0; i < n_rounds; ++i) {
            int pos = 0;

            while (pos < n_bytes) {
                ssize_t bytes_written = write(sock, buf + pos, n_bytes - pos);
                if (bytes_written < 0) {
                    if (errno == EWOULDBLOCK) {
                        continue;
                    } else {
                        perror("write");
                        free(buf);
                        close_connection(sock);
                        return 1;
                    }
                }
                pos += bytes_written;
            }
        }
        free(buf);

        close_connection(sock);

        printf("Sent everything!\n");
    } else {
        printf("Couldn't connect to server...\n");
    }

    return 0;
}
