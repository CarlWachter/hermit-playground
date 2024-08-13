window.BENCHMARK_DATA = {
  "lastUpdate": 1723553643986,
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
          "id": "b4832ed4b0495be08e8c37f76117e98c6f2b50e2",
          "message": "Merge pull request #1345 from cagatay-y/is-multi\n\nrefactor(virtio-net): remove unused is_multi field",
          "timestamp": "2024-08-04T12:05:50Z",
          "url": "https://github.com/hermit-os/kernel/commit/b4832ed4b0495be08e8c37f76117e98c6f2b50e2"
        },
        "date": 1723553643109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 120.820781534,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46028632112,
            "unit": "s",
            "range": 0.0042399553293854435,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48985768343999997,
            "unit": "s",
            "range": 0.0018958744189400557,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5312396625599999,
            "unit": "s",
            "range": 0.0040201637453266765,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "libhermit.a",
            "value": 21.474891662597656,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "rusty_demo",
            "value": 3.9233779907226562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 3.9027481079101562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 3.9406967163085938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 3.9389114379882812,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "2 Threads",
            "value": 99.80377833333333,
            "unit": "percent",
            "range": 0.10554988738264624,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.74785606666667,
            "unit": "percent",
            "range": 0.0919904899878002,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.84580426666667,
            "unit": "percent",
            "range": 0.039026822869178406,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 103.95000000000003,
            "unit": "ms",
            "range": 0.2179449471770336,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 295.34999999999997,
            "unit": "ms",
            "range": 25.442631546284673,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 114.14999999999999,
            "unit": "ms",
            "range": 10.056216982543685,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 191.14999999999998,
            "unit": "ms",
            "range": 3.1028212968200406,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 240.21404200000006,
            "unit": "ns",
            "range": 4.784036208562388,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1228.056908,
            "unit": "ns",
            "range": 174.21207921668244,
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
            "value": 69.72415834999998,
            "unit": "%",
            "range": 0.08160313821096284,
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
            "value": 14037.1019064,
            "unit": "Ticks",
            "range": 404.46845633815946,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14037.1019064,
            "unit": "Ticks",
            "range": 404.46845633815946,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5225.370373074998,
            "unit": "Ticks",
            "range": 81.28736491894969,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 107.79965000000001,
            "unit": "ns",
            "range": 3.635519100142372,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 382.78790000000004,
            "unit": "ns",
            "range": 5.00395428536273,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 191.82412500000004,
            "unit": "ns",
            "range": 10.7451692865256,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3400.9199827499997,
            "unit": "MByte/s",
            "range": 2337.9238849528665,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5303.737581300001,
            "unit": "MByte/s",
            "range": 3682.4566779837332,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2877.2779992,
            "unit": "MByte/s",
            "range": 2408.2121614138823,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3374.62928325,
            "unit": "MByte/s",
            "range": 2320.1211996595493,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5356.475740100001,
            "unit": "MByte/s",
            "range": 3718.394909098451,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2982.0207514999997,
            "unit": "MByte/s",
            "range": 2468.2240548203886,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3605.2535382,
            "unit": "MByte/s",
            "range": 2498.7394415804074,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5290.58325695,
            "unit": "MByte/s",
            "range": 3672.4432652422306,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2856.55557585,
            "unit": "MByte/s",
            "range": 2389.197222967543,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3570.1372228,
            "unit": "MByte/s",
            "range": 2475.469848858473,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5349.193691049998,
            "unit": "MByte/s",
            "range": 3713.4586638484852,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2955.5817518499994,
            "unit": "MByte/s",
            "range": 2444.1479396956565,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 101.8655124,
            "unit": "Mbit/s",
            "range": 1.2129324626833253,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 9313588.8,
            "unit": "ns",
            "range": 1608079.5519085987,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 14972029.200000001,
            "unit": "ns",
            "range": 2204693.7331211697,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          }
        ]
      }
    ]
  }
}