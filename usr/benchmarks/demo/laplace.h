#include <stdlib.h>

void laplace();
void compute(double *matrix[2], size_t size_x, size_t size_y, size_t *counter, double *residual);
void iteration(double *cur, double *next, size_t size_x, size_t size_y);
double get_residual(double *matrix, size_t size_x, size_t size_y);
void matrix_setup(double *matrix[2], size_t size_x, size_t size_y);