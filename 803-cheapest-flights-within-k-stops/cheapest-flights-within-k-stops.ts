function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of flights) {
        adj[u].push([v, w]);
    }

    const dist = Array(n + 1).fill(Infinity);
    dist[src] = 0;

    const pq = [[0,0, src]];

    while (pq.length > 0) {
        pq.sort((a, b) => a[1] - b[1]);
        const [currentDist, currentStopCount, u] = pq.shift();
        if(currentStopCount===k+1) continue
        for (const [v, w] of adj[u]) {
            if (dist[v] > currentDist + w) {
                dist[v] = currentDist + w;
                pq.push([dist[v],currentStopCount+1 , v]);
            }
        }
    }

    return dist[dst]===Infinity ? -1 : dist[dst]
};