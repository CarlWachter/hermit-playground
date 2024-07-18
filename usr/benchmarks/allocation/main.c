#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdint.h>
#include <stdbool.h>
#include <stddef.h>
#include "../bench_output.h"

#define BENCH_DURATION 3.0

// Result of a bench run.
typedef struct {
    size_t allocation_attempts;
    size_t successful_allocations;
    size_t pre_fail_allocations;
    size_t deallocations;

    // Sorted vector of the amount of clock ticks per successful allocation.
    uint64_t* all_alloc_measurements;
    size_t all_alloc_measurements_len;
    // Sorted vector of the amount of clock ticks per successful allocation under heap pressure.
    uint64_t* nofail_alloc_measurements;
    size_t nofail_alloc_measurements_len;
    // Sorted vector of the amount of clock ticks per deallocation.
    uint64_t* dealloc_measurements;
    size_t dealloc_measurements_len;
} BenchRunResults;

uint64_t now_fn() {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (uint64_t)(ts.tv_sec * 1e9 + ts.tv_nsec);
}

int compare_uint64(const void* a, const void* b) {
    if (*(uint64_t*)a < *(uint64_t*)b) return -1;
    if (*(uint64_t*)a > *(uint64_t*)b) return 1;
    return 0;
}

BenchRunResults benchmark_allocator() {
    BenchRunResults results = {0};
    results.all_alloc_measurements = malloc(1e6 * sizeof(uint64_t));
    results.nofail_alloc_measurements = malloc(1e6 * sizeof(uint64_t));
    results.dealloc_measurements = malloc(1e6 * sizeof(uint64_t));

    void* active_allocations[1000] = {0};
    size_t active_allocations_len = 0;

    bool any_alloc_failed = false;

    struct timespec bench_begin_time;
    clock_gettime(CLOCK_MONOTONIC, &bench_begin_time);

    while (1) {
        struct timespec now;
        clock_gettime(CLOCK_MONOTONIC, &now);
        if ((now.tv_sec - bench_begin_time.tv_sec) + (now.tv_nsec - bench_begin_time.tv_nsec) / 1e9 > BENCH_DURATION) {
            break;
        }

        size_t size = (rand() % ((1 << 16) - (1 << 6))) + (1 << 6);
        size_t align = 8 << (__builtin_ctz(rand()) / 2);
        if (align < sizeof(void*)) align = sizeof(void*);

        uint64_t alloc_begin = now_fn();
        void* ptr = aligned_alloc(align, size);
        uint64_t alloc_ticks = now_fn() - alloc_begin;

        results.allocation_attempts++;
        if (ptr != NULL) {
            active_allocations[active_allocations_len++] = ptr;

            results.successful_allocations++;
            if (!any_alloc_failed) {
                results.pre_fail_allocations++;
            }
        } else {
            any_alloc_failed = true;
        }

        results.all_alloc_measurements[results.all_alloc_measurements_len++] = alloc_ticks;
        if (!any_alloc_failed) {
            results.nofail_alloc_measurements[results.nofail_alloc_measurements_len++] = alloc_ticks;
        }

        if (active_allocations_len > 10 && rand() % 10 == 0) {
            for (int i = 0; i < 7; i++) {
                int index = rand() % active_allocations_len;
                void* allocation = active_allocations[index];
                active_allocations[index] = active_allocations[--active_allocations_len];

                uint64_t dealloc_begin = now_fn();
                free(allocation);
                uint64_t dealloc_ticks = now_fn() - dealloc_begin;

                results.deallocations++;
                results.dealloc_measurements[results.dealloc_measurements_len++] = dealloc_ticks;
            }
        }
    }

    // sort
    qsort(results.all_alloc_measurements, results.all_alloc_measurements_len, sizeof(uint64_t), compare_uint64);
    qsort(results.nofail_alloc_measurements, results.nofail_alloc_measurements_len, sizeof(uint64_t), compare_uint64);
    qsort(results.dealloc_measurements, results.dealloc_measurements_len, sizeof(uint64_t), compare_uint64);

    return results;
}

void print_bench_results(const BenchRunResults* res) {
    double allocation_success = (double)res->successful_allocations / res->allocation_attempts * 100.0;
    log_benchmark_data("Allocation success", "%", allocation_success);

    double deallocation_success = (double)res->deallocations / res->successful_allocations * 100.0;
    log_benchmark_data("Deallocation success", "%", deallocation_success);

    double pre_fail_alloc = (double)res->pre_fail_allocations / res->allocation_attempts * 100.0;
    log_benchmark_data("Pre-fail Allocations", "%", pre_fail_alloc);

    double avg_all_alloc = 0;
    for (size_t i = 0; i < res->all_alloc_measurements_len; i++) {
        avg_all_alloc += res->all_alloc_measurements[i];
    }
    avg_all_alloc /= res->all_alloc_measurements_len;
    log_benchmark_data("Average Allocation time", "Ticks", avg_all_alloc);

    double avg_nofail_alloc = 0;
    for (size_t i = 0; i < res->nofail_alloc_measurements_len; i++) {
        avg_nofail_alloc += res->nofail_alloc_measurements[i];
    }
    avg_nofail_alloc /= res->nofail_alloc_measurements_len;
    log_benchmark_data("Average Allocation time (no fail)", "Ticks", avg_nofail_alloc);

    double avg_dealloc = 0;
    for (size_t i = 0; i < res->dealloc_measurements_len; i++) {
        avg_dealloc += res->dealloc_measurements[i];
    }
    avg_dealloc /= res->dealloc_measurements_len;
    log_benchmark_data("Average Deallocation time", "Ticks", avg_dealloc);
}

int main() {
    BenchRunResults bench_alloc = benchmark_allocator();
    print_bench_results(&bench_alloc);

    free(bench_alloc.all_alloc_measurements);
    free(bench_alloc.nofail_alloc_measurements);
    free(bench_alloc.dealloc_measurements);

    return 0;
}
