#include "pi.h"
#include "../bench_output.h"
#include <math.h>
#include <stdio.h>
#include <pthread.h>
#include "elapsed_time.h"

#define STEPS 5000000
#define NUM_THREADS 4

struct ThreadData {
    int start;
    int end;
    double partial_sum;
};

const double STEP_SIZE = 1.0 / STEPS;

void *calculate_partial_sum(void *arg) {
    struct ThreadData *data = (struct ThreadData *)arg;
    data->partial_sum = 0.0;
    for (int i = data->start; i < data->end; ++i) {
        double x = (i + 0.5) * STEP_SIZE;
        data->partial_sum += 4.0 / (1.0 + x * x);
    }
    return NULL;
}

void calculate_pi(enum Mode mode) {
    int steps = STEPS;
    double sum = 0.0;
    struct timeval start, end;

    gettimeofday(&start, NULL);

    if (mode == Sequential) {
        for (int i = 0; i < steps; ++i) {
            double x = (i + 0.5) * STEP_SIZE;
            sum += 4.0 / (1.0 + x * x);
        }
    } else if (mode == Parallel) {
        // Initialize pthread variables
        pthread_t threads[NUM_THREADS];
        struct ThreadData thread_data[NUM_THREADS];

        // Create threads
        for (int t = 0; t < NUM_THREADS; ++t) {
            thread_data[t].start = t * (steps / NUM_THREADS);
            thread_data[t].end = (t + 1) * (steps / NUM_THREADS);
            if (t == NUM_THREADS - 1) {
                thread_data[t].end = steps;  // Ensure last thread covers all remaining steps
            }
            pthread_create(&threads[t], NULL, calculate_partial_sum, &thread_data[t]);
        }

        // Join threads and accumulate results
        for (int t = 0; t < NUM_THREADS; ++t) {
            pthread_join(threads[t], NULL);
            sum += thread_data[t].partial_sum;
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