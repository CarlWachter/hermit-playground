window.BENCHMARK_DATA = {
  "lastUpdate": 1722786839148,
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
        "date": 1722786838317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 122.879779232,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46645021711999995,
            "unit": "s",
            "range": 0.002835307893996464,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48446503044000006,
            "unit": "s",
            "range": 0.0066868016360200665,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5344836256400001,
            "unit": "s",
            "range": 0.003182796073557218,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "libhermit.a",
            "value": 20.501312255859375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "rusty_demo",
            "value": 3.8352584838867188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 3.8154525756835938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 3.852935791015625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 3.8506927490234375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "2 Threads",
            "value": 99.84821664285715,
            "unit": "percent",
            "range": 0.25875434033108946,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.70741435714285,
            "unit": "percent",
            "range": 0.26246830707254226,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.828653071428572,
            "unit": "percent",
            "range": 0.2593857152503992,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 103.94736842105263,
            "unit": "ms",
            "range": 0.2238984047062614,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 296,
            "unit": "ms",
            "range": 0.768594459538618,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 116.15789473684211,
            "unit": "ms",
            "range": 0.4854157471206579,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 186.52631578947367,
            "unit": "ms",
            "range": 0.34712573268678354,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 243.0847306122449,
            "unit": "ns",
            "range": 0.2630184574702877,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1668.4762724489797,
            "unit": "ns",
            "range": 3.6403255156272274,
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
            "value": 69.67809594871795,
            "unit": "%",
            "range": 0.15819741661351494,
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
            "value": 13822.008676923077,
            "unit": "Ticks",
            "range": 1.4449084815579283,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13822.008676923077,
            "unit": "Ticks",
            "range": 1.4449084815579283,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5236.681172564101,
            "unit": "Ticks",
            "range": 1.1084998861601993,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 110.22442105263157,
            "unit": "ns",
            "range": 0.365804177415477,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 419.239,
            "unit": "ns",
            "range": 0.3093619785299384,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 266.879947368421,
            "unit": "ns",
            "range": 0.3426593905237064,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 1726.61705266205,
            "unit": "MByte/s",
            "range": 3.4102428112761527,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 2758.6297302603875,
            "unit": "MByte/s",
            "range": 5.292894673278508,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 1541.8909451939057,
            "unit": "MByte/s",
            "range": 7.1941327971875415,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 1726.61705266205,
            "unit": "MByte/s",
            "range": 3.4102428112761527,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 2758.6297302603875,
            "unit": "MByte/s",
            "range": 5.292894673278508,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 1541.8909451939057,
            "unit": "MByte/s",
            "range": 7.1941327971875415,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 1821.2117925263155,
            "unit": "MByte/s",
            "range": 4.100965402819406,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 2742.651434063712,
            "unit": "MByte/s",
            "range": 5.58021847091484,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 1530.166563903047,
            "unit": "MByte/s",
            "range": 6.719324092471124,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 1821.2117925263155,
            "unit": "MByte/s",
            "range": 4.100965402819406,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 2742.651434063712,
            "unit": "MByte/s",
            "range": 5.58021847091484,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 1530.166563903047,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 56.7118115,
            "unit": "Mbit/s",
            "range": 1.384148711442638,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x3000B"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 242665.25,
            "unit": "ns",
            "range": 26.376185919383076,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x2000B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 2322335.5,
            "unit": "ns",
            "range": 132.43169437341896,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x2000B"
          }
        ]
      }
    ]
  }
}