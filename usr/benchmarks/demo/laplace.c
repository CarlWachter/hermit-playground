#include <stdio.h>
#include <string.h>
#include <time.h>
#include <math.h>
#include <assert.h>
#include "../bench_output.h"
#include "laplace.h"
#include "elapsed_time.h"

#define SIZE 64
#define ITERATIONS 1000

void matrix_setup(double *matrix[2], size_t size_x, size_t size_y) {
    memset(matrix[0], 0, sizeof(double) * size_x * size_y);
    memset(matrix[1], 0, sizeof(double) * size_x * size_y);

    // top row
    for (size_t x = 0; x < size_x; x++) {
        matrix[0][x] = 1.0;
        matrix[1][x] = 1.0;
    }

    // bottom row
    for (size_t x = 0; x < size_x; x++) {
        matrix[0][(size_y - 1) * size_x + x] = 1.0;
        matrix[1][(size_y - 1) * size_x + x] = 1.0;
    }

    // left row
    for (size_t y = 0; y < size_y; y++) {
        matrix[0][y * size_x] = 1.0;
        matrix[1][y * size_x] = 1.0;
    }

    // right row
    for (size_t y = 0; y < size_y; y++) {
        matrix[0][y * size_x + size_x - 1] = 1.0;
        matrix[1][y * size_x + size_x - 1] = 1.0;
    }
}

double get_residual(double *matrix, size_t size_x, size_t size_y) {
    double sum = 0.0;

    for (size_t y = 1; y < size_y - 1; y++) {
        for (size_t x = 1; x < size_x - 1; x++) {
            double new_val = (matrix[y * size_x + x - 1] +
                              matrix[y * size_x + x + 1] +
                              matrix[(y + 1) * size_x + x] +
                              matrix[(y - 1) * size_x + x]) * 0.25;

            double diff = new_val - matrix[y * size_x + x];
            sum += diff * diff;
        }
    }

    return sum;
}

void iteration(double *cur, double *next, size_t size_x, size_t size_y) {
    for (size_t y = 1; y < size_y - 1; y++) {
        for (size_t x = 1; x < size_x - 1; x++) {
            next[y * size_x + x] = (cur[y * size_x + x - 1] +
                                    cur[y * size_x + x + 1] +
                                    cur[(y + 1) * size_x + x] +
                                    cur[(y - 1) * size_x + x]) * 0.25;
        }
    }
}

void compute(double *matrix[2], size_t size_x, size_t size_y, size_t *counter, double *residual) {
    *counter = 0;

    while (*counter < ITERATIONS) {
        iteration(matrix[0], matrix[1], size_x, size_y);
        
        double *temp = matrix[0];
        matrix[0] = matrix[1];
        matrix[1] = temp;

        (*counter)++;
    }

    *residual = get_residual(matrix[0], size_x, size_y);
}

void laplace() {
    double *matrix[2];
    matrix[0] = (double *)malloc(SIZE * SIZE * sizeof(double));
    matrix[1] = (double *)malloc(SIZE * SIZE * sizeof(double));

    matrix_setup(matrix, SIZE, SIZE);

    struct timeval start, end;
    start.tv_usec = 0;
    end.tv_usec = 0;

    gettimeofday(&start, NULL);
    size_t counter;
    double residual;
    compute(matrix, SIZE, SIZE, &counter, &residual);
    gettimeofday(&end, NULL);

    int elapsed = get_elapsed_time(start, end);
    log_benchmark_data("Laplace 1000 Iterations", "ms", elapsed);

    assert(residual < 0.001);

    free(matrix[0]);
    free(matrix[1]);
}
