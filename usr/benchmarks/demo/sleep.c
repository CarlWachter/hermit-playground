#include "sleep.h"
#include "elapsed_time.h"
#include "../bench_output.h"
#include <assert.h>
#include <time.h>
#include <errno.h>    

int msleep(long msec)
{
    struct timespec ts;
    int res;

    if (msec < 0)
    {
        errno = EINVAL;
        return -1;
    }

    ts.tv_sec = msec / 1000;
    ts.tv_nsec = (msec % 1000) * 1000000;

    do {
        res = nanosleep(&ts, &ts);
    } while (res && errno == EINTR);

    return res;
}

void sleep() {
    struct timeval start, end;

    gettimeofday(&start, NULL);
    msleep(100); // 100ms
    gettimeofday(&end, NULL);
    int time_slept = get_elapsed_time(start, end);

    assert(time_slept <= 100+5); // 5ms tolerance

    log_benchmark_data("sleep", "ms", time_slept);
}