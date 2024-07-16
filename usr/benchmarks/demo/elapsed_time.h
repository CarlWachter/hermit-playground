#ifndef ELAPSED_TIME_H
#define ELAPSED_TIME_H

#include <sys/time.h>

double get_elapsed_time(struct timeval start, struct timeval end);

#endif /* ELAPSED_TIME_H */
