function networkDelayTime(times: number[][], n: number, k: number): number {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) {
    adj[u].push([v, w]);
  }

  const dist = Array(n + 1).fill(Infinity);
  dist[k] = 0;

  const pq = [[0, k]];

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [currentDist, u] = pq.shift();

    for (const [v, w] of adj[u]) {
      if (dist[v] > currentDist + w) {
        dist[v] = currentDist + w;
        pq.push([dist[v], v]);
      }
    }
  }

  // Get the maximum distance
  const maxTime = Math.max(...dist.slice(1));
  return maxTime === Infinity ? -1 : maxTime;
};