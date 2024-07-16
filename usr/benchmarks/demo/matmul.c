#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <assert.h>
#include <omp.h>
#include "bench_output.c"

#define MULT_CHUNK (1 * 1024)
#define LINEAR_CHUNK (64 * 1024)

void zero_dest(float *dest, size_t n) {
    memset(dest, 0, n * sizeof(float));
}

void seq_matmul(const float *a, const float *b, float *dest, size_t n) {
    zero_dest(dest, n * n);
    for (size_t i = 0; i < n; i++) {
        for (size_t j = 0; j < n; j++) {
            float sum = 0.0;
            for (size_t k = 0; k < n; k++) {
                sum += a[i * n + k] * b[k * n + j];
            }
            dest[i * n + j] = sum;
        }
    }
}

void seq_matmulz(const float *a, const float *b, float *dest, size_t n) {
    zero_dest(dest, n);
    for (size_t ij = 0; ij < n; ij++) {
        size_t i = ij & 0xaaaaaaa;
        size_t j = ij & 0x5555555;
        float sum = 0.0;
        for (size_t k = 0; k < n; k++) {
            sum += a[i | k] * b[(k << 1) | j];
        }
        dest[ij] = sum;
    }
}

void rmatsum(const float *src, float *dest, size_t len) {
    for (size_t i = 0; i < len; i++) {
        dest[i] += src[i];
    }
}

void rmatsub(const float *src, float *dest, size_t len) {
    for (size_t i = 0; i < len; i++) {
        dest[i] -= src[i];
    }
}

void rcopy(const float *src, float *dest, size_t len) {
    memcpy(dest, src, len * sizeof(float));
}

float *raw_buffer(size_t n) {
    return (float *)malloc(n * sizeof(float));
}

void matmulz(const float *a, const float *b, float *dest, size_t n) {
    if (n <= MULT_CHUNK) {
        seq_matmulz(a, b, dest, n);
        return;
    }

    float *tmp = raw_buffer(n);
    size_t mid = n / 2;
    size_t quarter = mid / 2;

    float *a1 = raw_buffer(quarter);
    float *a2 = raw_buffer(quarter);
    float *a3 = raw_buffer(quarter);
    float *a4 = raw_buffer(quarter);
    float *b1 = raw_buffer(quarter);
    float *b2 = raw_buffer(quarter);
    float *b3 = raw_buffer(quarter);
    float *b4 = raw_buffer(quarter);

    for (size_t i = 0; i < quarter; i++) {
        a1[i] = a[i];
        a2[i] = a[i + quarter];
        a3[i] = a[i + mid];
        a4[i] = a[i + mid + quarter];
        b1[i] = b[i];
        b2[i] = b[i + quarter];
        b3[i] = b[i + mid];
        b4[i] = b[i + mid + quarter];
    }

    float *d1 = raw_buffer(quarter);
    float *d2 = raw_buffer(quarter);
    float *d3 = raw_buffer(quarter);
    float *d4 = raw_buffer(quarter);
    float *t1 = raw_buffer(quarter);
    float *t2 = raw_buffer(quarter);
    float *t3 = raw_buffer(quarter);
    float *t4 = raw_buffer(quarter);

    // Multiply 8 submatrices
    #pragma omp parallel sections
    {
        #pragma omp section
        matmulz(a1, b1, d1, quarter);
        #pragma omp section
        matmulz(a1, b2, d2, quarter);
        #pragma omp section
        matmulz(a3, b1, d3, quarter);
        #pragma omp section
        matmulz(a3, b2, d4, quarter);
        #pragma omp section
        matmulz(a2, b3, t1, quarter);
        #pragma omp section
        matmulz(a2, b4, t2, quarter);
        #pragma omp section
        matmulz(a4, b3, t3, quarter);
        #pragma omp section
        matmulz(a4, b4, t4, quarter);
    }

    // Sum each quarter
    rmatsum(t1, d1, quarter);
    rmatsum(t2, d2, quarter);
    rmatsum(t3, d3, quarter);
    rmatsum(t4, d4, quarter);

    for (size_t i = 0; i < quarter; i++) {
        dest[i] = d1[i];
        dest[i + quarter] = d2[i];
        dest[i + mid] = d3[i];
        dest[i + mid + quarter] = d4[i];
    }

    free(tmp);
    free(a1);
    free(a2);
    free(a3);
    free(a4);
    free(b1);
    free(b2);
    free(b3);
    free(b4);
    free(d1);
    free(d2);
    free(d3);
    free(d4);
    free(t1);
    free(t2);
    free(t3);
    free(t4);
}

void matmul_strassen(const float *a, const float *b, float *dest, size_t n) {
    if (n <= MULT_CHUNK) {
        seq_matmulz(a, b, dest, n);
        return;
    }

    size_t quarter = n / 2;
    float *a11 = raw_buffer(quarter);
    float *a12 = raw_buffer(quarter);
    float *a21 = raw_buffer(quarter);
    float *a22 = raw_buffer(quarter);
    float *b11 = raw_buffer(quarter);
    float *b12 = raw_buffer(quarter);
    float *b21 = raw_buffer(quarter);
    float *b22 = raw_buffer(quarter);

    for (size_t i = 0; i < quarter; i++) {
        a11[i] = a[i];
        a12[i] = a[i + quarter];
        a21[i] = a[i + quarter * n];
        a22[i] = a[i + quarter * n + quarter];
        b11[i] = b[i];
        b12[i] = b[i + quarter];
        b21[i] = b[i + quarter * n];
        b22[i] = b[i + quarter * n + quarter];
    }

    float *m1 = raw_buffer(quarter);
    float *m2 = raw_buffer(quarter);
    float *m3 = raw_buffer(quarter);
    float *m4 = raw_buffer(quarter);
    float *m5 = raw_buffer(quarter);
    float *m6 = raw_buffer(quarter);
    float *m7 = raw_buffer(quarter);

    #pragma omp parallel sections
    {
        #pragma omp section
        strassen_add2_mul(a11, a22, b11, b22, m1, quarter);
        #pragma omp section
        strassen_add_mul(a21, a22, b11, m2, quarter);
        #pragma omp section
        strassen_sub_mul(b12, b22, a11, m3, quarter);
        #pragma omp section
        strassen_sub_mul(b21, b11, a22, m4, quarter);
        #pragma omp section
        strassen_add_mul(a11, a12, b22, m5, quarter);
        #pragma omp section
        strassen_sub_add_mul(a21, a11, b11, b12, m6, quarter);
        #pragma omp section
        strassen_sub_add_mul(a12, a22, b21, b22, m7, quarter);
    }

    float *c11 = raw_buffer(quarter);
    float *c12 = raw_buffer(quarter);
    float *c21 = raw_buffer(quarter);
    float *c22 = raw_buffer(quarter);

    #pragma omp parallel sections
    {
        #pragma omp section
        strassen_sum_sub(m1, m4, m7, m5, c11, quarter);
        #pragma omp section
        strassen_sum(m3, m5, c12, quarter);
        #pragma omp section
        strassen_sum(m2, m4, c21, quarter);
        #pragma omp section
        strassen_sum_sub(m1, m3, m6, m2, c22, quarter);
    }

    for (size_t i = 0; i < quarter; i++) {
        dest[i] = c11[i];
        dest[i + quarter] = c12[i];
        dest[i + quarter * n] = c21[i];
        dest[i + quarter * n + quarter] = c22[i];
    }

    free(a11);
    free(a12);
    free(a21);
    free(a22);
    free(b11);
    free(b12);
    free(b21);
    free(b22);
    free(m1);
    free(m2);
    free(m3);
    free(m4);
    free(m5);
    free(m6);
    free(m7);
    free(c11);
    free(c12);
    free(c21);
    free(c22);
}

void matmul(int argc, char **argv) {
    if (argc < 2) {
        printf("Usage: %s <matrix_size>\n", argv[0]);
        return 1;
    }

    size_t n = atoi(argv[1]);

    float *a = (float *)malloc(n * n * sizeof(float));
    float *b = (float *)malloc(n * n * sizeof(float));
    float *dest = (float *)malloc(n * n * sizeof(float));

    for (size_t i = 0; i < n * n; i++) {
        a[i] = (float)rand() / RAND_MAX;
        b[i] = (float)rand() / RAND_MAX;
    }

    struct timespec start, end;
    clock_gettime(CLOCK_MONOTONIC, &start);

    matmul_strassen(a, b, dest, n);

    clock_gettime(CLOCK_MONOTONIC, &end);

    double time_spent = (end.tv_sec - start.tv_sec) + (end.tv_nsec - start.tv_nsec) / 1e9;
    printf("Time: %f seconds\n", time_spent);

    free(a);
    free(b);
    free(dest);

    return 0;
}
