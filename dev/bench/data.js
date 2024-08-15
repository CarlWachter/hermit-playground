window.BENCHMARK_DATA = {
  "lastUpdate": 1723729800080,
  "repoUrl": "https://github.com/CarlWachter/hermit-playground",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Martin Kröning",
            "username": "mkroening",
            "email": "mkroening@posteo.net"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1723721394090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 130.065584178,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.462047164,
            "unit": "s",
            "range": 0.004118504714498164,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48663128963999996,
            "unit": "s",
            "range": 0.005171454349146747,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5357155792,
            "unit": "s",
            "range": 0.005482438889397994,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "libhermit.a",
            "value": 21.261476516723633,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "rusty_demo",
            "value": 3.8995742797851562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 3.8818359375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 3.9172210693359375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 3.91497802734375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "2 Threads",
            "value": 99.5306122,
            "unit": "percent",
            "range": 0.4928242803560164,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.580218266666655,
            "unit": "percent",
            "range": 0.21794993886807115,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 23.647496999999998,
            "unit": "percent",
            "range": 0.25730106171849865,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 104.00000000000004,
            "unit": "ms",
            "range": 0.31622776601683794,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 298.09999999999997,
            "unit": "ms",
            "range": 27.15860821176225,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 150.4,
            "unit": "ms",
            "range": 12.96688088940436,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 185.85000000000002,
            "unit": "ms",
            "range": 2.3932195887548637,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 245.64764200000008,
            "unit": "ns",
            "range": 2.7382981350532294,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1463.2893969999998,
            "unit": "ns",
            "range": 282.97150602656365,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "Allocation success",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Deallocation success",
            "value": 69.90402857499998,
            "unit": "%",
            "range": 0.02846516246825818,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time",
            "value": 14448.537539500005,
            "unit": "Ticks",
            "range": 458.0997055683055,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14448.537539500005,
            "unit": "Ticks",
            "range": 458.0997055683055,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5475.853623750001,
            "unit": "Ticks",
            "range": 202.79261083136157,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 108.43670000000003,
            "unit": "ns",
            "range": 5.332966895640735,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 381.39920000000006,
            "unit": "ns",
            "range": 4.40483378347015,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 181.25272499999997,
            "unit": "ns",
            "range": 19.274264847052233,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3357.9580210000004,
            "unit": "MByte/s",
            "range": 2315.307390577776,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5234.865575899999,
            "unit": "MByte/s",
            "range": 3627.6334817820702,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2862.367734000001,
            "unit": "MByte/s",
            "range": 2397.5388527855057,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3332.2017568500005,
            "unit": "MByte/s",
            "range": 2297.8077300208506,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5279.9183992,
            "unit": "MByte/s",
            "range": 3657.9685910410194,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2957.650974800001,
            "unit": "MByte/s",
            "range": 2448.4511950115334,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3546.96830145,
            "unit": "MByte/s",
            "range": 2467.0335505991143,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5261.06503065,
            "unit": "MByte/s",
            "range": 3647.856119000912,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2873.27338085,
            "unit": "MByte/s",
            "range": 2405.441694052825,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3512.0431247,
            "unit": "MByte/s",
            "range": 2443.50467016977,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5287.5648981,
            "unit": "MByte/s",
            "range": 3664.381059355709,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2973.8168888999994,
            "unit": "MByte/s",
            "range": 2461.11664248703,
            "group": "Micro",
            "plot_group": "Memset speed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Kröning",
            "username": "mkroening",
            "email": "mkroening@posteo.net"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1723725594222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 130.611554212,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46249840099999995,
            "unit": "s",
            "range": 0.005843343332017043,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48693804128,
            "unit": "s",
            "range": 0.004848153078936184,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5352408528,
            "unit": "s",
            "range": 0.004060246352011296,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "libhermit.a",
            "value": 21.261476516723633,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "rusty_demo",
            "value": 3.8995742797851562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 3.8818359375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 3.9172210693359375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 3.91497802734375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "2 Threads",
            "value": 99.38336066666666,
            "unit": "percent",
            "range": 0.29488322700048825,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.53733653333334,
            "unit": "percent",
            "range": 0.2630485168430246,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 23.596579066666667,
            "unit": "percent",
            "range": 0.3566451327923352,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 103.90000000000002,
            "unit": "ms",
            "range": 0.7000000000000001,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 299.3999999999999,
            "unit": "ms",
            "range": 31.746495869623157,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 151.95,
            "unit": "ms",
            "range": 15.920034547701208,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 186.55,
            "unit": "ms",
            "range": 3.0899029110960745,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 244.39176799999998,
            "unit": "ns",
            "range": 2.69779289504884,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1320.602417,
            "unit": "ns",
            "range": 226.75890719840305,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "Allocation success",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Deallocation success",
            "value": 69.900719775,
            "unit": "%",
            "range": 0.019517855456589406,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time",
            "value": 14436.155983100005,
            "unit": "Ticks",
            "range": 136.5475808643531,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14436.155983100005,
            "unit": "Ticks",
            "range": 136.5475808643531,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5470.236851825,
            "unit": "Ticks",
            "range": 52.75972769818311,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 108.68135000000001,
            "unit": "ns",
            "range": 3.35948950400206,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 382.6359,
            "unit": "ns",
            "range": 5.846804391289314,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 182.58579999999995,
            "unit": "ns",
            "range": 21.175443822881302,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3329.3182565500006,
            "unit": "MByte/s",
            "range": 2289.193964349859,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5264.8013869,
            "unit": "MByte/s",
            "range": 3653.6854535231073,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2892.1937561,
            "unit": "MByte/s",
            "range": 2426.5350459940564,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3326.9894977000004,
            "unit": "MByte/s",
            "range": 2287.8090031727384,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5306.3505994,
            "unit": "MByte/s",
            "range": 3678.669595403808,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2983.8257797500005,
            "unit": "MByte/s",
            "range": 2473.7274839834618,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3548.0363860999996,
            "unit": "MByte/s",
            "range": 2462.880444585522,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5230.30803385,
            "unit": "MByte/s",
            "range": 3629.256993327298,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2854.3901527000003,
            "unit": "MByte/s",
            "range": 2389.089306947038,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3558.02197985,
            "unit": "MByte/s",
            "range": 2467.9706470645833,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5258.1624471000005,
            "unit": "MByte/s",
            "range": 3646.832222714456,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2949.1811054,
            "unit": "MByte/s",
            "range": 2440.006362513697,
            "group": "Micro",
            "plot_group": "Memset speed"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Kröning",
            "username": "mkroening",
            "email": "mkroening@posteo.net"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1723729799297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 130.015964721,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46246074695999995,
            "unit": "s",
            "range": 0.006150981624857428,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.4872227737600001,
            "unit": "s",
            "range": 0.0054020037541987935,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5380627514399999,
            "unit": "s",
            "range": 0.004415365270469639,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "libhermit.a",
            "value": 21.261476516723633,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "rusty_demo",
            "value": 3.8995742797851562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 3.8818359375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 3.9172210693359375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 3.91497802734375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "2 Threads",
            "value": 99.44101599999999,
            "unit": "percent",
            "range": 0.30122973583318974,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.45532086666667,
            "unit": "percent",
            "range": 0.30497214729017846,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 23.637977066666668,
            "unit": "percent",
            "range": 0.40680232041692627,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 104.50000000000003,
            "unit": "ms",
            "range": 1.7748239349298849,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 316.45000000000005,
            "unit": "ms",
            "range": 50.96025412024552,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 145.04999999999998,
            "unit": "ms",
            "range": 7.067354526270774,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 189.95000000000002,
            "unit": "ms",
            "range": 8.488079877098235,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 246.59266599999998,
            "unit": "ns",
            "range": 9.160837894856776,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1361.015752,
            "unit": "ns",
            "range": 194.7802250239577,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "Allocation success",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Deallocation success",
            "value": 69.90976602500001,
            "unit": "%",
            "range": 0.023650516714744434,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time",
            "value": 14424.051161599997,
            "unit": "Ticks",
            "range": 180.7579264360873,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14424.051161599997,
            "unit": "Ticks",
            "range": 180.7579264360873,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5459.397942875003,
            "unit": "Ticks",
            "range": 67.07651248644709,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 106.80334999999998,
            "unit": "ns",
            "range": 1.8394993143515976,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 381.68755,
            "unit": "ns",
            "range": 3.0207575949585914,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 190.77035,
            "unit": "ns",
            "range": 10.443658196311043,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3334.5957943999997,
            "unit": "MByte/s",
            "range": 2291.3726917565473,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5209.6658363999995,
            "unit": "MByte/s",
            "range": 3629.2188471673685,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2877.8779478500005,
            "unit": "MByte/s",
            "range": 2413.912832014045,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3310.2479467499998,
            "unit": "MByte/s",
            "range": 2274.5182108645176,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5261.6164082,
            "unit": "MByte/s",
            "range": 3665.1919589417125,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2977.0704705500007,
            "unit": "MByte/s",
            "range": 2468.968017355715,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3549.4569669500006,
            "unit": "MByte/s",
            "range": 2462.2328612689726,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5258.333196250001,
            "unit": "MByte/s",
            "range": 3666.730676406381,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2902.8741657500004,
            "unit": "MByte/s",
            "range": 2439.3980909771462,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3517.163046750001,
            "unit": "MByte/s",
            "range": 2440.367145314231,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5310.7550692,
            "unit": "MByte/s",
            "range": 3702.6022301770104,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2989.59883225,
            "unit": "MByte/s",
            "range": 2482.8545585333754,
            "group": "Micro",
            "plot_group": "Memset speed"
          }
        ]
      }
    ]
  }
}