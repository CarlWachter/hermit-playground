window.BENCHMARK_DATA = {
  "lastUpdate": 1723559383094,
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
          "id": "b4832ed4b0495be08e8c37f76117e98c6f2b50e2",
          "message": "Merge pull request #1345 from cagatay-y/is-multi\n\nrefactor(virtio-net): remove unused is_multi field",
          "timestamp": "2024-08-04T12:05:50Z",
          "url": "https://github.com/hermit-os/kernel/commit/b4832ed4b0495be08e8c37f76117e98c6f2b50e2"
        },
        "date": 1723559382355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 119.817939806,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46253425372,
            "unit": "s",
            "range": 0.005167746761397826,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.49167669416000004,
            "unit": "s",
            "range": 0.0037973756193863248,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5336959621199999,
            "unit": "s",
            "range": 0.003135660751728215,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "libhermit.a",
            "value": 21.475326538085938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "rusty_demo",
            "value": 3.9234848022460938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 3.9028549194335938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 3.9407958984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 3.9390106201171875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "2 Threads",
            "value": 101.2648652,
            "unit": "percent",
            "range": 5.491457431831387,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 50.461074399999994,
            "unit": "percent",
            "range": 2.6885337346362057,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.193852733333333,
            "unit": "percent",
            "range": 1.3498829333470594,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 103.90000000000003,
            "unit": "ms",
            "range": 0.29999999999999993,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 291.55,
            "unit": "ms",
            "range": 14.630362264824479,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 112.6,
            "unit": "ms",
            "range": 10.287856919689348,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 190.04999999999998,
            "unit": "ms",
            "range": 1.4991664350564948,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 241.59746199999995,
            "unit": "ns",
            "range": 4.718019866676697,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1246.203299,
            "unit": "ns",
            "range": 221.1418316766255,
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
            "value": 69.85492435,
            "unit": "%",
            "range": 0.03493726993738231,
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
            "value": 14555.424729375,
            "unit": "Ticks",
            "range": 434.2750730764768,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14555.424729375,
            "unit": "Ticks",
            "range": 434.2750730764768,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5188.5445373249995,
            "unit": "Ticks",
            "range": 179.52633568543814,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 107.559,
            "unit": "ns",
            "range": 2.858791702800328,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 382.12679999999995,
            "unit": "ns",
            "range": 5.597560429329907,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 202.8082,
            "unit": "ns",
            "range": 3.557000050604441,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3392.4864234499996,
            "unit": "MByte/s",
            "range": 2331.7547734262093,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5179.481389449998,
            "unit": "MByte/s",
            "range": 3582.468789017842,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2852.9255623500003,
            "unit": "MByte/s",
            "range": 2389.1730548133805,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3369.6190923999998,
            "unit": "MByte/s",
            "range": 2316.3051762388695,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5212.359265949998,
            "unit": "MByte/s",
            "range": 3603.931432195403,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2957.4486204000004,
            "unit": "MByte/s",
            "range": 2449.6576144056166,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3613.795620699999,
            "unit": "MByte/s",
            "range": 2504.6742218034815,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5151.562440949999,
            "unit": "MByte/s",
            "range": 3560.5642430176085,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2886.5223333000004,
            "unit": "MByte/s",
            "range": 2421.6579563781615,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3581.9477567499994,
            "unit": "MByte/s",
            "range": 2483.586487433282,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5188.181710849999,
            "unit": "MByte/s",
            "range": 3585.0190634780056,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2980.5498030500007,
            "unit": "MByte/s",
            "range": 2471.3852250504788,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 131.5853564,
            "unit": "Mbit/s",
            "range": 24.62142901911528,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 9436227.600000001,
            "unit": "ns",
            "range": 324797.6467683225,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 14508381.000000002,
            "unit": "ns",
            "range": 727771.0546629345,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          }
        ]
      }
    ]
  }
}