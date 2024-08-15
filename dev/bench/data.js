window.BENCHMARK_DATA = {
  "lastUpdate": 1723721395036,
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
      }
    ]
  }
}