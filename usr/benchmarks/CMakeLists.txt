cmake_minimum_required(VERSION 3.7)
include(../../cmake/HermitCore-Application.cmake)

project(hermit_benchmarks C)

add_executable(basic basic.c)
target_compile_options(basic PRIVATE -pthread)
target_link_libraries(basic pthread)

add_executable(hg hg.c hist.c rdtsc.c run.c init.c opt.c report.c setup.c)

# add_executable(netio netio.c) # temporarily removed due to lack of select() support

add_executable(stream stream.c)
target_compile_options(stream PRIVATE -fopenmp)
target_link_libraries(stream -fopenmp)

add_executable(taskswitch taskswitch.c)

# deployment
install_local_targets(extra/benchmarks)
