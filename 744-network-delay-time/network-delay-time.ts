function networkDelayTime(times: number[][], n: number, k: number): number {
    // Create adjacency list
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [u, v, w] of times) {
    adj[u].push([v, w]);
  }

  // Initialize distances array
  const dist = Array(n + 1).fill(Infinity);
  dist[k] = 0;

  // Priority queue as an array
  const pq = [[0, k]]; // [distance, node]

  while (pq.length > 0) {
    // Get the node with the smallest distance
    pq.sort((a, b) => a[0] - b[0]); // Sort by distance
    const [currentDist, u] = pq.shift(); // Dequeue the smallest element

    // Check neighbors
    for (const [v, w] of adj[u]) {
      if (dist[v] > currentDist + w) {
        dist[v] = currentDist + w;
        pq.push([dist[v], v]); // Enqueue the updated distance
      }
    }
  }

  // Get the maximum distance
  const maxTime = Math.max(...dist.slice(1));
  return maxTime === Infinity ? -1 : maxTime;
};