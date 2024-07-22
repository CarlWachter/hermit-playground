cmake_minimum_required(VERSION 3.7)
include(../../cmake/HermitCore-Application.cmake)

project(hermit_benchmarks C)

# Disable compiler optimizations
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -O0")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -O0")

add_executable(basic basic.c)
target_compile_options(basic PRIVATE -pthread)
target_link_libraries(basic pthread)

add_executable(demo demo/main.c demo/laplace.c demo/elapsed_time.c demo/pi.c demo/sleep.c bench_output.c) #demo/matmul.c removed for now
target_compile_options(demo PRIVATE -pthread)
target_link_libraries(demo pthread)

add_executable(hg hg.c hist.c rdtsc.c run.c init.c opt.c report.c setup.c)

# add_executable(netio netio.c) # temporarily removed due to lack of select() support

add_executable(tcp-client-bw netbench/tcp-bw/client.c bench_output.c)

add_executable(tcp-server-bw netbench/tcp-bw/server.c bench_output.c)

add_executable(alloc_bench allocation/main.c bench_output.c)

add_executable(micro_bench micro/main.c bench_output.c)
target_compile_options(micro_bench PRIVATE -pthread)
target_link_libraries(micro_bench pthread)

add_executable(mutex_bench mutex/main.c bench_output.c)
target_compile_options(mutex_bench PRIVATE -pthread)
target_link_libraries(mutex_bench pthread)

add_executable(multithreaded multithreaded.c bench_output.c)
target_compile_options(multithreaded PRIVATE -pthread)
target_link_libraries(multithreaded pthread)

add_executable(stream stream.c)
target_compile_options(stream PRIVATE -fopenmp)
target_link_libraries(stream -fopenmp)

add_executable(startup startup.c)

add_executable(taskswitch taskswitch.c)

# deployment
install_local_targets(extra/benchmarks)
