#!/usr/bin/env bash

# Usage:   run.sh BENCH C/S ROUNDS BYTES
# Example: run.sh tcp-bw server 1000000 1000 
#          run.sh udp-latency client 1000 1000

set -o errexit

netbench_dir="${0%/*}"
root_dir="$netbench_dir"/../../..
loader_dir="$root_dir"/hermit-loader-x86_64

bench=$1
client_server=$2
rounds=$3
bytes=$4

echo "Launching $bin on linux"

gcc -o "$netbench_dir"/$bench/$client_server "$netbench_dir"/$bench/$client_server.c "$netbench_dir"/../bench_output.c

if [ "$client_server" = "client" ]; then
  addr="0.0.0.0"
elif [ "$client_server" = "server" ]; then
  addr="127.0.0.1"
else
  echo "Error: client_server must be either 'client' or 'server'"
  exit 1
fi

./"$netbench_dir"/$bench/$client_server $addr 7878 $rounds $bytes 0

rm "$netbench_dir"/$bench/$client_server
