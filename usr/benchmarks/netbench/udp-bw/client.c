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
    if (argc < 5) {
        fprintf(stderr, "Usage: %s <address> <port> <n_rounds> <n_bytes>\n", argv[0]);
        exit(EXIT_FAILURE);
    }
    config.address = argv[1];
    config.port = atoi(argv[2]);
    config.n_rounds = atoi(argv[3]);
    config.n_bytes = atoi(argv[4]);
    return config;
}

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

    printf("[CLIENT]Socket open! Ready to send...\n");

    // Create buffers to read/write
    char* wbuf = (char*)malloc(n_bytes);
    char* rbuf = (char*)malloc(n_bytes);

    for (int i = 0; i < n_rounds; i++) {
        sendto(sockfd, wbuf, n_bytes, 0, (const struct sockaddr*)&servaddr, sizeof(servaddr));
        recvfrom(sockfd, rbuf, n_bytes, 0, NULL, NULL);
    }

    printf("[CLIENT]Sent everything!\n");

    // Cleanup
    free(wbuf);
    free(rbuf);
    close(sockfd);

    return 0;
}
