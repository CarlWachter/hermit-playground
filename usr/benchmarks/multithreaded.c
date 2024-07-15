#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <pthread.h>
#include <sys/time.h>

#include "bench_output.h"

#define N 100000000

typedef struct {
    int start;
    int end;
    double step;
    double result;
} ThreadData;

void* calculate_pi(void* arg) {
    ThreadData* data = (ThreadData*)arg;
    double thread_pi = 0.0;
    for (int i = data->start; i < data->end; i++) {
        double x = (i + 0.5) * data->step;
        thread_pi += 4.0 / (1.0 + x * x);
    }
    data->result = thread_pi;
    return NULL;
}

double calc_pi_multi_threaded(int n, int threads) {
    double pi = 0.0;
    double step = 1.0 / (double)n;
    pthread_t threads_handles[threads];
    ThreadData thread_data[threads];

    for (int i = 0; i < threads; i++) {
        thread_data[i].start = i * n / threads;
        thread_data[i].end = (i + 1) * n / threads;
        thread_data[i].step = step;
        pthread_create(&threads_handles[i], NULL, calculate_pi, &thread_data[i]);
    }

    for (int i = 0; i < threads; i++) {
        pthread_join(threads_handles[i], NULL);
        pi += thread_data[i].result;
    }

    return pi * step;
}

double get_elapsed_time(struct timeval start, struct timeval end) {
    return (end.tv_sec - start.tv_sec) + (end.tv_usec - start.tv_usec) / 1000000.0;
}

int main() {
    struct timeval start, end;
    double cpu_time_used;
    double speedup1_2, speedup1_4, speedup1_8;
    double efficiency1_2, efficiency1_4, efficiency1_8;

    gettimeofday(&start, NULL);
    double pi = calc_pi_multi_threaded(N, 1);
    gettimeofday(&end, NULL);
    cpu_time_used = get_elapsed_time(start, end);
    printf("Pi (1 thread): %.15f, Time: %.6f seconds\n", pi, cpu_time_used);
    double time_1_thread = cpu_time_used;

    gettimeofday(&start, NULL);
    pi = calc_pi_multi_threaded(N, 2);
    gettimeofday(&end, NULL);
    cpu_time_used = get_elapsed_time(start, end);
    printf("Pi (2 threads): %.15f, Time: %.6f seconds\n", pi, cpu_time_used);
    speedup1_2 = time_1_thread / cpu_time_used;
    efficiency1_2 = speedup1_2 / 2.0;
    printf("Speedup (1 vs 2 threads): %.2f, Efficiency: %.2f%%\n", speedup1_2, efficiency1_2 * 100.0);

    gettimeofday(&start, NULL);
    pi = calc_pi_multi_threaded(N, 4);
    gettimeofday(&end, NULL);
    cpu_time_used = get_elapsed_time(start, end);
    printf("Pi (4 threads): %.15f, Time: %.6f seconds\n", pi, cpu_time_used);
    speedup1_4 = time_1_thread / cpu_time_used;
    efficiency1_4 = speedup1_4 / 4.0;
    printf("Speedup (1 vs 4 threads): %.2f, Efficiency: %.2f%%\n", speedup1_4, efficiency1_4 * 100.0);

    gettimeofday(&start, NULL);
    pi = calc_pi_multi_threaded(N, 8);
    gettimeofday(&end, NULL);
    cpu_time_used = get_elapsed_time(start, end);
    printf("Pi (8 threads): %.15f, Time: %.6f seconds\n", pi, cpu_time_used);
    speedup1_8 = time_1_thread / cpu_time_used;
    efficiency1_8 = speedup1_8 / 8.0;
    printf("Speedup (1 vs 8 threads): %.2f, Efficiency: %.2f%%\n", speedup1_8, efficiency1_8 * 100.0);

    log_benchmark_data("2 Threads", "percent", efficiency1_2 * 100.0);
    log_benchmark_data("4 Threads", "percent", efficiency1_4 * 100.0);
    log_benchmark_data("8 Threads", "percent", efficiency1_8 * 100.0);

    return 0;
}
