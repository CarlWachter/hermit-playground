#include "pi.h"
#include "../bench_output.h"
#include <math.h>
#include <stdio.h>
#include <pthread.h>
#include "elapsed_time.h"

#define STEPS 5000000
#define NUM_THREADS 4

typedef struct {
    int start;
    int end;
    double step;
    double result;
} ThreadData;

const double STEP_SIZE = 1.0 / STEPS;

void* calculate_partial_sum(void* arg) {
    ThreadData* data = (ThreadData*)arg;
    double thread_pi = 0.0;
    for (int i = data->start; i < data->end; i++) {
        double x = (i + 0.5) * data->step;
        thread_pi += 4.0 / (1.0 + x * x);
    }
    data->result = thread_pi;
    return NULL;
}

void calculate_pi(enum Mode mode) {
    int steps = STEPS;
    double sum = 0.0;
    struct timeval start, end;

    start.tv_usec = 0;
    end.tv_usec = 0;

    gettimeofday(&start, NULL);

    if (mode == Sequential) {
        for (int i = 0; i < steps; ++i) {
            double x = (i + 0.5) * STEP_SIZE;
            sum += 4.0 / (1.0 + x * x);
        }
    } else if (mode == Parallel) {
        pthread_t threads_handles[NUM_THREADS];
        ThreadData thread_data[NUM_THREADS];

        for (int i = 0; i < NUM_THREADS; i++) {
            thread_data[i].start = i * STEPS / NUM_THREADS;
            thread_data[i].end = (i + 1) * STEPS / NUM_THREADS;
            thread_data[i].step = STEP_SIZE;
            pthread_create(&threads_handles[i], NULL, calculate_partial_sum, &thread_data[i]);
        }

        for (int i = 0; i < NUM_THREADS; i++) {
            pthread_join(threads_handles[i], NULL);
            sum += thread_data[i].result;
        }
    }

    double mypi = sum * STEP_SIZE;
    gettimeofday(&end, NULL);

    int elapsed = get_elapsed_time(start, end);

    log_benchmark_data(mode == Sequential ? "Pi-Calculation-Sequential" : "Pi-Calculation-Parallel", "ms", elapsed);

    if (fabs(mypi - M_PI) > 1e-10) {
        fprintf(stderr, "Assertion failed: calculated value of pi is not within the acceptable range.\n");
    }
}

void pi() {
	calculate_pi(Sequential);
	calculate_pi(Parallel);
}