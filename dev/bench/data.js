window.BENCHMARK_DATA = {
  "lastUpdate": 1721041126914,
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
          "id": "285f28af2b077a85723376c82ad8e38f508716d1",
          "message": "Merge pull request #1237 from CarlWachter/no_lwip\n\nfeat(newlib): using kernel networking, instead of lwip",
          "timestamp": "2024-06-04T10:40:31Z",
          "url": "https://github.com/hermit-os/kernel/commit/285f28af2b077a85723376c82ad8e38f508716d1"
        },
        "date": 1721041126197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.00453224,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.078968243,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.082325458,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.084320688,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "Startup Time"
          }
        ]
      }
    ]
  }
}