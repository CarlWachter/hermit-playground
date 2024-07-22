#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdatomic.h>
#include <stdint.h>
#include <sys/time.h>
#include "../bench_output.h"

#define NUMBER_OF_ITERATIONS 10000000
#define NUM_THREADS 2

typedef struct {
    atomic_size_t num_threads;
} SpinBarrier;

typedef struct {
    SpinBarrier *barrier;
    pthread_mutex_t *mutex;
    size_t *counter;
    uint64_t duration;
} ThreadArgs;

void spin_barrier_init(SpinBarrier *barrier, size_t n) {
    atomic_init(&barrier->num_threads, n);
}

void spin_barrier_wait(SpinBarrier *barrier) {
    atomic_fetch_sub_explicit(&barrier->num_threads, 1, memory_order_relaxed);
    while (atomic_load_explicit(&barrier->num_threads, memory_order_relaxed) != 0) {
        __builtin_ia32_pause();
    }
}

uint64_t get_time_ns() {
    struct timeval tv;
    gettimeofday(&tv, NULL);
    return (uint64_t)tv.tv_sec * 1000000000 + (uint64_t)tv.tv_usec * 1000;
}

void *mutex_stress_test_thread(void *arg) {
    ThreadArgs *args = (ThreadArgs *)arg;
    uint64_t start, end;

    // Warmup
    start = get_time_ns();
    for (size_t i = 0; i < NUMBER_OF_ITERATIONS; i++) {
        pthread_mutex_lock(args->mutex);
        (*args->counter)++;
        pthread_mutex_unlock(args->mutex);
    }
    end = get_time_ns();
    args->duration = end - start;
    spin_barrier_wait(args->barrier);

    start = get_time_ns();
    for (size_t i = 0; i < NUMBER_OF_ITERATIONS; i++) {
        pthread_mutex_lock(args->mutex);
        (*args->counter)++;
        pthread_mutex_unlock(args->mutex);
    }
    end = get_time_ns();
    args->duration = end - start;

    return NULL;
}

void mutex_stress_test(size_t no_threads) {
    size_t counter = 0;
    pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

    SpinBarrier barrier;
    spin_barrier_init(&barrier, no_threads);

    pthread_t threads[no_threads];
    ThreadArgs args[no_threads];
    for (size_t i = 0; i < no_threads; i++) {
        args[i].barrier = &barrier;
        args[i].mutex = &mutex;
        args[i].counter = &counter;
        pthread_create(&threads[i], NULL, mutex_stress_test_thread, &args[i]);
    }

    uint64_t total_duration = 0;
    for (size_t i = 0; i < no_threads; i++) {
        pthread_join(threads[i], NULL);
        total_duration += args[i].duration;
    }

    if (counter != 2 * NUMBER_OF_ITERATIONS * no_threads) {
        fprintf(stderr, "Counter value is incorrect: %zu\n", counter);
        exit(EXIT_FAILURE);
    }
    
    char bench_name[50];    
    sprintf(bench_name, "%zu Threads", no_threads);

    double average = (double)total_duration / (no_threads * NUMBER_OF_ITERATIONS);
    log_benchmark_data_with_group(
        bench_name,
        "ns",
        average,
        (char *)"Mutex Stress Test Average Time per Iteration"
    );
}

void mutex_stress_test_single() {
    size_t counter = 0;
    pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

    uint64_t start, end;

    // Warmup
    start = get_time_ns();
    for (size_t i = 0; i < NUMBER_OF_ITERATIONS; i++) {
        pthread_mutex_lock(&mutex);
        (counter)++;
        pthread_mutex_unlock(&mutex);
    }
    end = get_time_ns();
    uint64_t duration = end - start;

    start = get_time_ns();
    for (size_t i = 0; i < NUMBER_OF_ITERATIONS; i++) {
        pthread_mutex_lock(&mutex);
        (counter)++;
        pthread_mutex_unlock(&mutex);
    }
    end = get_time_ns();
    duration = end - start;

    if (counter != 2 * NUMBER_OF_ITERATIONS) {
        fprintf(stderr, "Counter value is incorrect: %zu\n", counter);
        exit(EXIT_FAILURE);
    }

    double average = (double)duration / NUMBER_OF_ITERATIONS;
    log_benchmark_data_with_group(
        "1 Thread",
        "ns",
        average,
        (char *)"Mutex Stress Test Average Time per Iteration"
    );
}

int main() {
    for(int i = 1; i <= NUM_THREADS; i*=2) {
        if (i == 1) {
            mutex_stress_test_single();
        }else{
            mutex_stress_test(i);
        }
    }

    return 0;
}
