cmake_minimum_required(VERSION 3.7)
include(../../cmake/HermitCore-Application.cmake)

project(hermit_tests C CXX Fortran)

add_executable(hello hello.c)
add_executable(jacobi jacobi.c)
add_executable(hello++ hello++.cpp)
#add_executable(hellof hellof.f90) Temporarily removing Fortran support
#add_executable(pi pi.go)

add_executable(test-malloc test-malloc.c)
add_executable(test-malloc-mt test-malloc-mt.c)
target_compile_options(test-malloc-mt PRIVATE -pthread)
target_link_libraries(test-malloc-mt pthread)

#add_executable(server server.go)
#target_link_libraries(server netgo)

add_executable(thr_hello thr_hello.c)
target_compile_options(thr_hello PRIVATE -pthread)
target_link_libraries(thr_hello pthread)

add_executable(nweb23 nweb23.c)
target_compile_options(nweb23 PRIVATE -pthread)
target_link_libraries(nweb23 pthread)

add_executable(hello-tcp hello-tcp.c)

# deployment
install_local_targets(extra/tests)
