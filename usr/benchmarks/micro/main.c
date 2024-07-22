#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <pthread.h>
#include <sys/time.h>
#include <stdint.h>
#include "../bench_output.h"

#define NR_RUNS 1000

// Benchmark function for syscall
void bench_syscall() {
    int n = 1000000;

    // Cache warmup
    getpid();

    struct timeval start, end;
    start.tv_usec = 0;
    end.tv_usec = 0;

    gettimeofday(&start, NULL);
    for (int i = 0; i < n; i++) {
        getpid();
    }
    gettimeofday(&end, NULL);

    double time_ns = (end.tv_sec - start.tv_sec) * 1e9 + (end.tv_usec - start.tv_usec) * 1e3;

    log_benchmark_data("Time for syscall (getpid)", "ns", time_ns / n);
}

// Benchmark function for single-thread scheduling
void bench_sched_one_thread() {
    int n = 1000000;

    // Cache warmup
    sched_yield();
    sched_yield();

    struct timeval start, end;
    start.tv_usec = 0;
    end.tv_usec = 0;

    gettimeofday(&start, NULL);
    for (int i = 0; i < n; i++) {
        sched_yield();
    }
    gettimeofday(&end, NULL);

    double time_ns = (end.tv_sec - start.tv_sec) * 1e9 + (end.tv_usec - start.tv_usec) * 1e3;

    log_benchmark_data_with_group("1 Thread", "ns", time_ns / n, "Scheduling time");
}

// Thread function for two-thread scheduling benchmark
void* yield_thread(void* arg) {
    int n = *((int*)arg);
    for (int i = 0; i < n; i++) {
        sched_yield();
    }
    return NULL;
}

// Benchmark function for two-thread scheduling
void bench_sched_two_threads() {
    int n = 1000000;
    int nthreads = 2;

    // Cache warmup
    sched_yield();
    sched_yield();

    pthread_t threads[nthreads - 1];
    int arg = n;

    struct timeval start, end;
    start.tv_usec = 0;
    end.tv_usec = 0;

    gettimeofday(&start, NULL);
    for (int i = 0; i < nthreads - 1; i++) {
        pthread_create(&threads[i], NULL, yield_thread, &arg);
    }

    for (int i = 0; i < n; i++) {
        sched_yield();
    }

    for (int i = 0; i < nthreads - 1; i++) {
        pthread_join(threads[i], NULL);
    }

    gettimeofday(&end, NULL);
    double time_ns = (end.tv_sec - start.tv_sec) * 1e9 + (end.tv_usec - start.tv_usec) * 1e3;

    log_benchmark_data_with_group("2 Threads", "ns", (double)time_ns / (nthreads * n), "Scheduling time");
}

// Built-in memcpy benchmark
void memcpy_builtin(size_t n) {
    uint8_t* v1 = malloc(n);
    uint8_t* v2 = malloc(n);
    memset(v1, 1, n);

    struct timeval start, end;
    start.tv_usec = 0;
    end.tv_usec = 0;

    gettimeofday(&start, NULL);
    for (int i = 0; i < NR_RUNS; i++) {
        memcpy(v2, v1, n);
    }
    gettimeofday(&end, NULL);

    double elapsed = (end.tv_sec - start.tv_sec) + (end.tv_usec - start.tv_usec) / 1e6;

    char bench_name[50];    
    sprintf(bench_name, "(built_in) block size %zu", n);

    log_benchmark_data_with_group(
		bench_name,
		"MByte/s",
		(NR_RUNS * n) / (1024.0 * 1024.0 * elapsed),
		"Memcpy speed"
    );

    free(v1);
    free(v2);
}

// Built-in memset benchmark
void memset_builtin(size_t n) {
    uint8_t* v1 = malloc(n);

    struct timeval start, end;
    start.tv_usec = 0;
    end.tv_usec = 0;

    gettimeofday(&start, NULL);
    for (int i = 0; i < NR_RUNS; i++) {
        memset(v1, 27, n);
    }
    gettimeofday(&end, NULL);

    double elapsed = (end.tv_sec - start.tv_sec) + (end.tv_usec - start.tv_usec) / 1e6;

    char bench_name[50];    
    sprintf(bench_name, "(built_in) block size %zu", n);

    log_benchmark_data_with_group(
		bench_name,
		"MByte/s",
		(NR_RUNS * n) / (1024.0 * 1024.0 * elapsed),
		"Memset speed"
    );

    free(v1);
}

// memcpy benchmark using libc memcpy
void memcpy_libc(size_t n) {
    uint8_t* v1 = malloc(n);
    uint8_t* v2 = malloc(n);
    memset(v1, 1, n);

    struct timeval start, end;
    start.tv_usec = 0;
    end.tv_usec = 0;
    
    gettimeofday(&start, NULL);
    for (int i = 0; i < NR_RUNS; i++) {
        memcpy(v2, v1, n);
    }
    gettimeofday(&end, NULL);

    double elapsed = (end.tv_sec - start.tv_sec) + (end.tv_usec - start.tv_usec) / 1e6;

    char bench_name[50];    
    sprintf(bench_name, "(libc) block size %zu", n);

    log_benchmark_data_with_group(
		bench_name,
		"MByte/s",
		(NR_RUNS * n) / (1024.0 * 1024.0 * elapsed),
		"Memcpy speed"
    );

    free(v1);
    free(v2);
}

// memset benchmark using libc memset
void memset_libc(size_t n) {
    uint8_t* v1 = malloc(n);

    struct timeval start, end;
    start.tv_usec = 0;
    end.tv_usec = 0;
    gettimeofday(&start, NULL);
    for (int i = 0; i < NR_RUNS; i++) {
        memset(v1, 27, n);
    }
    gettimeofday(&end, NULL);

    double elapsed = (end.tv_sec - start.tv_sec) + (end.tv_usec - start.tv_usec) / 1e6;

    char bench_name[50];    
    sprintf(bench_name, "(libc) block size %zu", n);

    log_benchmark_data_with_group(
		bench_name,
		"MByte/s",
		(NR_RUNS * n) / (1024.0 * 1024.0 * elapsed),
		"Memset speed"
    );

    free(v1);
}

// Benchmark function for memory operations
void bench_mem() {
    memcpy_builtin(4096);
    memcpy_builtin(1048576);
    memcpy_builtin(16 * 1048576);
    memset_builtin(4096);
    memset_builtin(1048576);
    memset_builtin(16 * 1048576);
    memcpy_libc(4096);
    memcpy_libc(1048576);
    memcpy_libc(16 * 1048576);
    memset_libc(4096);
    memset_libc(1048576);
    memset_libc(16 * 1048576);
}

int main() {
    bench_syscall();
    bench_sched_one_thread();
    bench_sched_two_threads();
    bench_mem();
    return 0;
}
