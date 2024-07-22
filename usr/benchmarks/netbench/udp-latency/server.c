#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>

struct Config {
    char* address;
    int port;
    int n_rounds;
    int n_bytes;
};

// Function to parse command line arguments
struct Config parse_args(int argc, char* argv[]) {
    struct Config config;
    if (argc != 5) {
        fprintf(stderr, "Usage: %s <address> <port> <n_rounds> <n_bytes>\n", argv[0]);
        exit(EXIT_FAILURE);
    }
    printf("[SERVER]Parsing arguments...\n");
    config.address = argv[1];
    config.port = atoi(argv[2]);
    config.n_rounds = atoi(argv[3]);
    config.n_bytes = atoi(argv[4]);

    return config;
}

int main(int argc, char* argv[]) {
    int port, n_rounds, n_bytes;
    struct Config args = parse_args(argc, argv);
    port = args.port;
    n_rounds = args.n_rounds;
    n_bytes = args.n_bytes;

    printf("[SERVER]Binding to port %d...\n", port);

    int sockfd;
    struct sockaddr_in servaddr, cliaddr;
    socklen_t len = sizeof(cliaddr);
    
    // Create UDP socket
    if ((sockfd = socket(AF_INET, SOCK_DGRAM, 0)) < 0) {
        perror("socket creation failed");
        exit(EXIT_FAILURE);
    }

    memset(&servaddr, 0, sizeof(servaddr));

    // Filling server information
    servaddr.sin_family = AF_INET;
    servaddr.sin_addr.s_addr = INADDR_ANY;
    servaddr.sin_port = htons(port);

    // Bind the socket
    if (bind(sockfd, (const struct sockaddr*)&servaddr, sizeof(servaddr)) < 0) {
        perror("bind failed");
        close(sockfd);
        exit(EXIT_FAILURE);
    }

    printf("[SERVER]Socket (%d) open! Ready to receive...\n", port);

    char* buf = (char*)malloc(n_bytes);
    if (buf == NULL) {
        perror("malloc failed");
        close(sockfd);
        exit(EXIT_FAILURE);
    }

    int tot_bytes = 0;

    for (int i = 0; i < n_rounds; i++) {
        ssize_t amt = recvfrom(sockfd, buf, n_bytes, 0, (struct sockaddr*)&cliaddr, &len);
        if (amt < 0) {
            perror("recvfrom failed");
            free(buf);
            close(sockfd);
            exit(EXIT_FAILURE);
        }

        if (sendto(sockfd, buf, amt, 0, (const struct sockaddr*)&cliaddr, len) < 0) {
            perror("sendto failed");
            free(buf);
            close(sockfd);
            exit(EXIT_FAILURE);
        }

        if (amt != n_bytes) {
            printf("[SERVER]In Round %d: Received %zd bytes, expected %d\n", i, amt, n_bytes);
        }

        tot_bytes += amt * 2;
    }

    // Cleanup
    free(buf);
    close(sockfd);

    return 0;
}