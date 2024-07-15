#include <stdio.h>

/// Log benchmark data to stdout, so it can be captured by the benchmarking framework hermit-bench.
///
/// * `benchmark_name` - The name under which the benchmark will be stored.
/// * `unit` - The unit of the benchmark value.
/// * `value` - The benchmark value.
void log_benchmark_data(const char* benchmark_name, const char* unit, double value);

/// Log benchmark data to stdout, so it can be captured by the benchmarking framework hermit-bench.
///
/// * `benchmark_name` - The name under which the benchmark will be stored.
/// * `unit` - The unit of the benchmark value.
/// * `value` - The benchmark value.
/// * `plot_group` - The plot group in which the benchmark will be plotted.
void log_benchmark_data_with_group(const char* benchmark_name, const char* unit, double value, const char* plot_group);

