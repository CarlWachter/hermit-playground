window.BENCHMARK_DATA = {
  "lastUpdate": 1723601715550,
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
        "date": 1723564041396,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 120.328506288,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.4674935693999999,
            "unit": "s",
            "range": 0.004946066134898265,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.4898315503199999,
            "unit": "s",
            "range": 0.004640434426387026,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.53290097504,
            "unit": "s",
            "range": 0.004171931774691294,
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
            "value": 99.2687782,
            "unit": "percent",
            "range": 1.1850728107734265,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.51847626666667,
            "unit": "percent",
            "range": 0.46400919854035444,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.744587666666664,
            "unit": "percent",
            "range": 0.1519232930254244,
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
            "value": 295.6,
            "unit": "ms",
            "range": 26.710297639674476,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 113.35000000000001,
            "unit": "ms",
            "range": 9.78915215940584,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 191.84999999999997,
            "unit": "ms",
            "range": 3.6369630187836663,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 240.00649600000006,
            "unit": "ns",
            "range": 4.680179555015383,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1270.9046289999997,
            "unit": "ns",
            "range": 203.14762088635743,
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
            "value": 69.69919607499999,
            "unit": "%",
            "range": 0.06459834523863207,
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
            "value": 14004.455753650001,
            "unit": "Ticks",
            "range": 442.1087089037998,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14004.455753650001,
            "unit": "Ticks",
            "range": 442.1087089037998,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5247.621267900001,
            "unit": "Ticks",
            "range": 188.84133899222573,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 108.38105,
            "unit": "ns",
            "range": 3.213304303594665,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 382.17060000000004,
            "unit": "ns",
            "range": 5.182073459533351,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 181.32755,
            "unit": "ns",
            "range": 19.233198229812164,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3302.3548736000007,
            "unit": "MByte/s",
            "range": 2282.470891494706,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5241.14350225,
            "unit": "MByte/s",
            "range": 3627.7037769831895,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2887.06638035,
            "unit": "MByte/s",
            "range": 2416.6491475867438,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3234.5429891,
            "unit": "MByte/s",
            "range": 2247.754992345935,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5294.0071753,
            "unit": "MByte/s",
            "range": 3665.3865918810848,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2991.508514,
            "unit": "MByte/s",
            "range": 2476.457600922496,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3522.4686266000003,
            "unit": "MByte/s",
            "range": 2457.968546013609,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5294.801615999999,
            "unit": "MByte/s",
            "range": 3670.9403401817294,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2836.9577750999993,
            "unit": "MByte/s",
            "range": 2369.0873175595175,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3442.9795355,
            "unit": "MByte/s",
            "range": 2416.6910245311806,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5351.041417049999,
            "unit": "MByte/s",
            "range": 3711.037318684572,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2941.589730649999,
            "unit": "MByte/s",
            "range": 2430.16267487638,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 133.074082,
            "unit": "Mbit/s",
            "range": 39.10644275956211,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 8317514.4,
            "unit": "ns",
            "range": 923411.824233933,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 13328760,
            "unit": "ns",
            "range": 901833.3495605494,
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
        "date": 1723568726451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 120.047350283,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46130552375999995,
            "unit": "s",
            "range": 0.00511432040887549,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48908160032,
            "unit": "s",
            "range": 0.004761774238871243,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.531720799,
            "unit": "s",
            "range": 0.004238199434013134,
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
            "value": 100.20138746666667,
            "unit": "percent",
            "range": 1.121180055449843,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.924993799999996,
            "unit": "percent",
            "range": 0.6606628378534387,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.945199866666673,
            "unit": "percent",
            "range": 0.33992610946986024,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 103.85000000000004,
            "unit": "ms",
            "range": 0.35707142142714243,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 288.04999999999995,
            "unit": "ms",
            "range": 4.554942370656296,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 107.1,
            "unit": "ms",
            "range": 14.085098508707706,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 189.59999999999994,
            "unit": "ms",
            "range": 1.0677078252031311,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 241.6067020000001,
            "unit": "ns",
            "range": 4.4215171190662605,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1202.938826,
            "unit": "ns",
            "range": 167.00379798355465,
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
            "value": 69.70087170000001,
            "unit": "%",
            "range": 0.07753829484977165,
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
            "value": 13960.6287729,
            "unit": "Ticks",
            "range": 210.98268562001715,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13960.6287729,
            "unit": "Ticks",
            "range": 210.98268562001715,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5211.3513555750005,
            "unit": "Ticks",
            "range": 44.842258340830455,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 107.42270000000002,
            "unit": "ns",
            "range": 2.9480169962196627,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 384.9863500000001,
            "unit": "ns",
            "range": 4.104897578198511,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 180.01972500000002,
            "unit": "ns",
            "range": 19.497234244997717,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3387.592202450001,
            "unit": "MByte/s",
            "range": 2328.8981607268734,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5301.62037125,
            "unit": "MByte/s",
            "range": 3685.855853422962,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2934.035989350001,
            "unit": "MByte/s",
            "range": 2461.0331067656894,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3362.750399800001,
            "unit": "MByte/s",
            "range": 2312.3192497922746,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5364.851466000001,
            "unit": "MByte/s",
            "range": 3729.210169361242,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 3043.2174016500003,
            "unit": "MByte/s",
            "range": 2524.851713833186,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3609.6297977500003,
            "unit": "MByte/s",
            "range": 2504.4563055444537,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5294.125135649999,
            "unit": "MByte/s",
            "range": 3686.1009137138317,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2930.483833099999,
            "unit": "MByte/s",
            "range": 2456.3795639100417,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3576.3138299000007,
            "unit": "MByte/s",
            "range": 2482.1977576754734,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5357.691771749999,
            "unit": "MByte/s",
            "range": 3730.1149986862133,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 3037.633819399999,
            "unit": "MByte/s",
            "range": 2518.462181245307,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 100.22454139999999,
            "unit": "Mbit/s",
            "range": 1.57085016930586,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 8905215,
            "unit": "ns",
            "range": 1111064.4232777865,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 12581120.8,
            "unit": "ns",
            "range": 1420593.1903366847,
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
        "date": 1723573432583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 119.028737964,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46176976327999997,
            "unit": "s",
            "range": 0.005437650786601483,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48691228324,
            "unit": "s",
            "range": 0.0036753066286357348,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5318383760799998,
            "unit": "s",
            "range": 0.003776821022596036,
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
            "value": 101.51385466666667,
            "unit": "percent",
            "range": 6.889146326606518,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.732716200000006,
            "unit": "percent",
            "range": 0.14334246101752285,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.808708533333334,
            "unit": "percent",
            "range": 0.09511721073277028,
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
            "value": 299.75000000000006,
            "unit": "ms",
            "range": 28.446221190168654,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 113.9,
            "unit": "ms",
            "range": 14.148851543499918,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 191.24999999999997,
            "unit": "ms",
            "range": 4.072775466435635,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 241.22286,
            "unit": "ns",
            "range": 4.944177442244565,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1212.5773120000001,
            "unit": "ns",
            "range": 126.44089790689544,
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
            "value": 69.68186722500003,
            "unit": "%",
            "range": 0.043217039800573814,
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
            "value": 13875.1711289,
            "unit": "Ticks",
            "range": 82.35037055649452,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13875.1711289,
            "unit": "Ticks",
            "range": 82.35037055649452,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5203.2090158249985,
            "unit": "Ticks",
            "range": 29.81328396946803,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 107.41669999999999,
            "unit": "ns",
            "range": 2.669868013591683,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 385.9749,
            "unit": "ns",
            "range": 14.401006815150115,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 185.375525,
            "unit": "ns",
            "range": 20.640243925019686,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3397.703025100001,
            "unit": "MByte/s",
            "range": 2335.4145681261225,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5163.552948799998,
            "unit": "MByte/s",
            "range": 3569.8433214406787,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2898.142501799999,
            "unit": "MByte/s",
            "range": 2426.2950936472453,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3373.158036700001,
            "unit": "MByte/s",
            "range": 2318.7030600687044,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5202.787267249999,
            "unit": "MByte/s",
            "range": 3595.9320904739143,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 3004.4849563,
            "unit": "MByte/s",
            "range": 2487.785813300243,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3581.2540836999992,
            "unit": "MByte/s",
            "range": 2483.065226348506,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5197.779429950002,
            "unit": "MByte/s",
            "range": 3601.9470392317276,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2860.6216249500003,
            "unit": "MByte/s",
            "range": 2391.4886395680637,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3544.1727392,
            "unit": "MByte/s",
            "range": 2458.0487006868334,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5245.542545300002,
            "unit": "MByte/s",
            "range": 3634.5879392428137,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2968.4155035000003,
            "unit": "MByte/s",
            "range": 2455.0213544985536,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 100.3283956,
            "unit": "Mbit/s",
            "range": 1.4213563800762437,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 9230568.8,
            "unit": "ns",
            "range": 1529248.8027710076,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 14151960.8,
            "unit": "ns",
            "range": 875771.9693485056,
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
        "date": 1723578158315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 119.556899186,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.4619390365200001,
            "unit": "s",
            "range": 0.004947590081911905,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.4884597868400002,
            "unit": "s",
            "range": 0.004880697032756815,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.53021572792,
            "unit": "s",
            "range": 0.005423715424940084,
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
            "value": 99.81586266666667,
            "unit": "percent",
            "range": 0.16400437380332794,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.726107199999994,
            "unit": "percent",
            "range": 0.13445483018034993,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.851617400000002,
            "unit": "percent",
            "range": 0.03627275920908119,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 103.95000000000003,
            "unit": "ms",
            "range": 0.21794494717703364,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 310.65000000000003,
            "unit": "ms",
            "range": 41.85244915175216,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 116.6,
            "unit": "ms",
            "range": 14.004999107461591,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 190.64999999999995,
            "unit": "ms",
            "range": 2.8508770580296856,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 240.07306199999996,
            "unit": "ns",
            "range": 4.975662519942044,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1262.384388,
            "unit": "ns",
            "range": 284.1193174892879,
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
            "value": 69.675880475,
            "unit": "%",
            "range": 0.051048590572113764,
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
            "value": 13990.00804485,
            "unit": "Ticks",
            "range": 565.4268268481947,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13990.00804485,
            "unit": "Ticks",
            "range": 565.4268268481947,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5253.7805626,
            "unit": "Ticks",
            "range": 256.6054134879447,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 108.92689999999999,
            "unit": "ns",
            "range": 3.7329218435429365,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 383.0664,
            "unit": "ns",
            "range": 4.1722790582606075,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 182.49912500000002,
            "unit": "ns",
            "range": 19.60455820454294,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3347.8532438000007,
            "unit": "MByte/s",
            "range": 2306.866957675087,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5178.855807849998,
            "unit": "MByte/s",
            "range": 3583.9788692431475,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2923.8185476500003,
            "unit": "MByte/s",
            "range": 2454.470074970019,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3323.178249000001,
            "unit": "MByte/s",
            "range": 2289.86631591944,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5208.9114267999985,
            "unit": "MByte/s",
            "range": 3603.3312202615734,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 3025.2263672500003,
            "unit": "MByte/s",
            "range": 2510.42409015678,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3570.498993799999,
            "unit": "MByte/s",
            "range": 2476.7507193533365,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5266.0687992,
            "unit": "MByte/s",
            "range": 3653.538085948171,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2892.6451540000007,
            "unit": "MByte/s",
            "range": 2425.9989726378512,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3535.253148849999,
            "unit": "MByte/s",
            "range": 2452.9150660184146,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5307.94571825,
            "unit": "MByte/s",
            "range": 3681.1786074771676,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2995.5387407000007,
            "unit": "MByte/s",
            "range": 2484.0822893557524,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 101.77955479999999,
            "unit": "Mbit/s",
            "range": 3.0916413030283056,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 9234723,
            "unit": "ns",
            "range": 1522741.310952586,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 14950368.6,
            "unit": "ns",
            "range": 1599454.8426529083,
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
        "date": 1723582833010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 119.192414375,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46044319484,
            "unit": "s",
            "range": 0.005200146807825397,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48686751788,
            "unit": "s",
            "range": 0.005400243291825681,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.53036607604,
            "unit": "s",
            "range": 0.002628819590190289,
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
            "value": 99.69084813333333,
            "unit": "percent",
            "range": 0.2784633529597425,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.694935866666675,
            "unit": "percent",
            "range": 0.15592514352550424,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.8377032,
            "unit": "percent",
            "range": 0.07103553103173092,
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
            "value": 286.40000000000003,
            "unit": "ms",
            "range": 1.8814887722226776,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 110.45,
            "unit": "ms",
            "range": 11.573569026017859,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 191.94999999999996,
            "unit": "ms",
            "range": 3.66708330966178,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 242.49062199999995,
            "unit": "ns",
            "range": 6.3501288860397125,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1249.5387010000002,
            "unit": "ns",
            "range": 163.41420380608517,
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
            "value": 69.69355892499999,
            "unit": "%",
            "range": 0.05004412612504521,
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
            "value": 13899.049482975002,
            "unit": "Ticks",
            "range": 109.20813728060159,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13899.049482975002,
            "unit": "Ticks",
            "range": 109.20813728060159,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5212.624124775,
            "unit": "Ticks",
            "range": 38.18439905816852,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 107.4806,
            "unit": "ns",
            "range": 2.7866265340012824,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 383.19365,
            "unit": "ns",
            "range": 5.721292225319383,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 173.096775,
            "unit": "ns",
            "range": 28.31123333946758,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3350.4276172,
            "unit": "MByte/s",
            "range": 2304.9469991531782,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5203.4607406000005,
            "unit": "MByte/s",
            "range": 3604.2939055853353,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2913.4683903499995,
            "unit": "MByte/s",
            "range": 2443.3590350820605,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3325.22155775,
            "unit": "MByte/s",
            "range": 2287.7584561556255,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5249.8396376,
            "unit": "MByte/s",
            "range": 3635.894602258824,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 3009.800613499999,
            "unit": "MByte/s",
            "range": 2494.6926595900545,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3563.94283955,
            "unit": "MByte/s",
            "range": 2470.3756252583084,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5171.847514249999,
            "unit": "MByte/s",
            "range": 3579.0954510650263,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2876.0110482999994,
            "unit": "MByte/s",
            "range": 2406.1989650787514,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3529.9079948,
            "unit": "MByte/s",
            "range": 2447.5539135510717,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5213.3575531999995,
            "unit": "MByte/s",
            "range": 3606.90578616926,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2972.5346092,
            "unit": "MByte/s",
            "range": 2458.31326673327,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 103.75400739999999,
            "unit": "Mbit/s",
            "range": 4.570388856071816,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 8396820.600000001,
            "unit": "ns",
            "range": 766013.6297232837,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 12813783.4,
            "unit": "ns",
            "range": 852317.9963217016,
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
        "date": 1723587522697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 118.761180598,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.4636526041999999,
            "unit": "s",
            "range": 0.0057102509521749995,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.4898085121200001,
            "unit": "s",
            "range": 0.002680830898033702,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5305367346400001,
            "unit": "s",
            "range": 0.002314176429465772,
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
            "value": 99.87496939999998,
            "unit": "percent",
            "range": 0.11652730805026032,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.807468666666665,
            "unit": "percent",
            "range": 0.08172835852723072,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.8649678,
            "unit": "percent",
            "range": 0.053364139664759766,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 104.00000000000003,
            "unit": "ms",
            "range": 2.842170943040401e-14,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 303.1500000000001,
            "unit": "ms",
            "range": 37.38485655984251,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 111.35000000000001,
            "unit": "ms",
            "range": 11.650214590298328,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 190.24999999999997,
            "unit": "ms",
            "range": 2.9979159427842537,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 243.62209799999994,
            "unit": "ns",
            "range": 11.362728543171134,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1188.413819,
            "unit": "ns",
            "range": 152.38603499785236,
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
            "value": 69.7153558,
            "unit": "%",
            "range": 0.07899762772172378,
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
            "value": 14019.320815775,
            "unit": "Ticks",
            "range": 434.60357518194627,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14019.320815775,
            "unit": "Ticks",
            "range": 434.60357518194627,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5252.01052795,
            "unit": "Ticks",
            "range": 188.25834043946062,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 107.40330000000003,
            "unit": "ns",
            "range": 3.0315250963830054,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 382.95885,
            "unit": "ns",
            "range": 5.1402562414241615,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 204.111125,
            "unit": "ns",
            "range": 4.4098811460032525,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3338.3844977499994,
            "unit": "MByte/s",
            "range": 2307.744076190143,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5266.158494599998,
            "unit": "MByte/s",
            "range": 3645.961880029008,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2889.0314673499993,
            "unit": "MByte/s",
            "range": 2418.6410865894504,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3314.8360869999997,
            "unit": "MByte/s",
            "range": 2291.615957051886,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5286.360418949998,
            "unit": "MByte/s",
            "range": 3657.996133060048,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2985.5024567999994,
            "unit": "MByte/s",
            "range": 2470.4856993251,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3556.7266541500007,
            "unit": "MByte/s",
            "range": 2481.248695805055,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5227.4676723,
            "unit": "MByte/s",
            "range": 3616.3007726656674,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2898.4704111000005,
            "unit": "MByte/s",
            "range": 2429.198413234151,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3522.111601700001,
            "unit": "MByte/s",
            "range": 2457.907522750012,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5258.0611007,
            "unit": "MByte/s",
            "range": 3635.5227329469294,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2992.305229750001,
            "unit": "MByte/s",
            "range": 2478.3176963242145,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 99.9765912,
            "unit": "Mbit/s",
            "range": 2.1072331866747342,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 8699563.4,
            "unit": "ns",
            "range": 873313.1323278266,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 12344414.4,
            "unit": "ns",
            "range": 400551.99626944814,
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
        "date": 1723592274496,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 119.471860766,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46094574492,
            "unit": "s",
            "range": 0.0040110177547860665,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48617276791999997,
            "unit": "s",
            "range": 0.005087092163949109,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.53101044824,
            "unit": "s",
            "range": 0.005080329412829769,
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
            "value": 99.36352013333332,
            "unit": "percent",
            "range": 1.7829603468801696,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.60150226666667,
            "unit": "percent",
            "range": 0.5592242709900289,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.768474666666666,
            "unit": "percent",
            "range": 0.2827191208432066,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 104.00000000000003,
            "unit": "ms",
            "range": 2.842170943040401e-14,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 303.25,
            "unit": "ms",
            "range": 37.20198247405641,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 113.79999999999998,
            "unit": "ms",
            "range": 11.430660523346845,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 191.3,
            "unit": "ms",
            "range": 3.835361782153021,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 241.68377,
            "unit": "ns",
            "range": 6.72953527501714,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1231.2186449999997,
            "unit": "ns",
            "range": 152.30131981637854,
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
            "value": 69.68716882499997,
            "unit": "%",
            "range": 0.06217548638607089,
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
            "value": 13901.520591075,
            "unit": "Ticks",
            "range": 120.71230804754866,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13901.520591075,
            "unit": "Ticks",
            "range": 120.71230804754866,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5210.7529003,
            "unit": "Ticks",
            "range": 44.892494347200845,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 107.87015000000001,
            "unit": "ns",
            "range": 3.133423276147032,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 384.30245,
            "unit": "ns",
            "range": 4.253151684045606,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 192.01892500000002,
            "unit": "ns",
            "range": 10.37834002859288,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3390.564126850001,
            "unit": "MByte/s",
            "range": 2330.3681295759156,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5226.923818299999,
            "unit": "MByte/s",
            "range": 3614.5100330697805,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2842.747708000001,
            "unit": "MByte/s",
            "range": 2373.664749262908,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3367.1300161500008,
            "unit": "MByte/s",
            "range": 2314.601132672849,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5266.583563949999,
            "unit": "MByte/s",
            "range": 3640.561393637981,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2939.7404870500004,
            "unit": "MByte/s",
            "range": 2427.083244717293,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3608.2016618499993,
            "unit": "MByte/s",
            "range": 2500.1755460263557,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5276.87700985,
            "unit": "MByte/s",
            "range": 3658.8117069541104,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2870.981719449999,
            "unit": "MByte/s",
            "range": 2403.0106409872524,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3575.115482949999,
            "unit": "MByte/s",
            "range": 2478.194842463751,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5303.81610315,
            "unit": "MByte/s",
            "range": 3675.248898778767,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2965.5609214999995,
            "unit": "MByte/s",
            "range": 2453.2540072420325,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 100.39856420000001,
            "unit": "Mbit/s",
            "range": 1.0957173175454307,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 9736550,
            "unit": "ns",
            "range": 1153465.5605386752,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 14876588.6,
            "unit": "ns",
            "range": 4157379.7602615324,
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
        "date": 1723597003530,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 119.103764302,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.46106420851999996,
            "unit": "s",
            "range": 0.004752149475450055,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.4865806594399999,
            "unit": "s",
            "range": 0.005424719454650087,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.52936176248,
            "unit": "s",
            "range": 0.0038126623987629685,
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
            "value": 99.70741666666666,
            "unit": "percent",
            "range": 0.5028655741181269,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.735793799999996,
            "unit": "percent",
            "range": 0.1167663866125863,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.845025733333333,
            "unit": "percent",
            "range": 0.08966417850213204,
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
            "value": 305.35,
            "unit": "ms",
            "range": 39.208768152034565,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 111.05000000000001,
            "unit": "ms",
            "range": 9.09656528586477,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 191.24999999999997,
            "unit": "ms",
            "range": 3.561951712193753,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 241.00453000000005,
            "unit": "ns",
            "range": 5.242589997711057,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1249.4992110000003,
            "unit": "ns",
            "range": 198.67365074046288,
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
            "value": 69.7014472,
            "unit": "%",
            "range": 0.07428410004677982,
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
            "value": 13919.110696774998,
            "unit": "Ticks",
            "range": 171.57595877687953,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13919.110696774998,
            "unit": "Ticks",
            "range": 171.57595877687953,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5225.938848900001,
            "unit": "Ticks",
            "range": 79.90758496694353,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 108.28785,
            "unit": "ns",
            "range": 2.8898588421409115,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 382.07280000000014,
            "unit": "ns",
            "range": 4.078115209260278,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 192.29605000000004,
            "unit": "ns",
            "range": 10.00780985117994,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3373.2141352000003,
            "unit": "MByte/s",
            "range": 2322.0733298742466,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5164.530311899999,
            "unit": "MByte/s",
            "range": 3576.0210610490703,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2853.0167831,
            "unit": "MByte/s",
            "range": 2385.2128208075533,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3349.09711895,
            "unit": "MByte/s",
            "range": 2305.807568594777,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5202.370447999999,
            "unit": "MByte/s",
            "range": 3601.103323231833,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2959.96333445,
            "unit": "MByte/s",
            "range": 2448.1140108386785,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3592.6635231,
            "unit": "MByte/s",
            "range": 2491.4531919696806,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5277.5479729,
            "unit": "MByte/s",
            "range": 3657.064807799716,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2801.133971200001,
            "unit": "MByte/s",
            "range": 2335.361226429774,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3554.4868218500005,
            "unit": "MByte/s",
            "range": 2465.90097312789,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5300.9770356,
            "unit": "MByte/s",
            "range": 3671.3189283805023,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2897.3869678500005,
            "unit": "MByte/s",
            "range": 2389.0425825313314,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 117.26471000000001,
            "unit": "Mbit/s",
            "range": 21.799748257509805,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 9287438.4,
            "unit": "ns",
            "range": 1265961.8345537279,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 15378029.600000001,
            "unit": "ns",
            "range": 1442112.679615931,
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
        "date": 1723601714796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 119.564872918,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.4602324978,
            "unit": "s",
            "range": 0.0047745518984942835,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.48866288059999996,
            "unit": "s",
            "range": 0.0051722875678493745,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.53191356884,
            "unit": "s",
            "range": 0.004125021804758779,
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
            "value": 99.75555926666668,
            "unit": "percent",
            "range": 0.467623081891312,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 49.823406199999994,
            "unit": "percent",
            "range": 0.24818819072018658,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 24.853816400000003,
            "unit": "percent",
            "range": 0.04567855608751231,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "sleep",
            "value": 104.00000000000003,
            "unit": "ms",
            "range": 2.842170943040401e-14,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 286.8,
            "unit": "ms",
            "range": 1.8867962264113203,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 111.49999999999999,
            "unit": "ms",
            "range": 12.804296154025804,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 190.29999999999998,
            "unit": "ms",
            "range": 2.551470164434615,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 243.026918,
            "unit": "ns",
            "range": 5.966980308453847,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 1187.706477,
            "unit": "ns",
            "range": 131.2713502461059,
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
            "value": 69.69084854999998,
            "unit": "%",
            "range": 0.07223176318038767,
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
            "value": 13933.99181495,
            "unit": "Ticks",
            "range": 288.9209813638866,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13933.99181495,
            "unit": "Ticks",
            "range": 288.9209813638866,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 5227.97928505,
            "unit": "Ticks",
            "range": 120.66302484488378,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 106.79745,
            "unit": "ns",
            "range": 2.2442274054783287,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "1 Thread",
            "value": 383.1926499999999,
            "unit": "ns",
            "range": 5.085540229660953,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 Threads",
            "value": 181.3451,
            "unit": "ns",
            "range": 19.82759743738509,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3348.883637699999,
            "unit": "MByte/s",
            "range": 2304.6960238389515,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5234.6967653,
            "unit": "MByte/s",
            "range": 3633.266000745097,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2864.29681075,
            "unit": "MByte/s",
            "range": 2395.199926604485,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 3325.909545099999,
            "unit": "MByte/s",
            "range": 2289.0685266652586,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 5212.791554300001,
            "unit": "MByte/s",
            "range": 3622.467073492125,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 2921.7702712,
            "unit": "MByte/s",
            "range": 2417.710092307487,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3555.4563471500005,
            "unit": "MByte/s",
            "range": 2469.315318912978,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5301.786926250001,
            "unit": "MByte/s",
            "range": 3682.882483040202,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2879.2678379500007,
            "unit": "MByte/s",
            "range": 2409.6007831368793,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(libc) block size 4096",
            "value": 3522.4725860500007,
            "unit": "MByte/s",
            "range": 2446.9637558729,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 1048576",
            "value": 5283.396069850001,
            "unit": "MByte/s",
            "range": 3673.864941365041,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(libc) block size 16777216",
            "value": 2939.27983885,
            "unit": "MByte/s",
            "range": 2433.468560781976,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP server",
            "value": 101.7080082,
            "unit": "Mbit/s",
            "range": 1.7084310554398618,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 100x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 6903716.800000001,
            "unit": "ns",
            "range": 3326264.2284945073,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 15557058,
            "unit": "ns",
            "range": 3094949.813562992,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 250x65535B"
          }
        ]
      }
    ]
  }
}