function shortestPathBinaryMatrix(grid: number[][]): number {
    let n = grid.length;
    let visited = Array.from({ length: n }, () => new Array(n).fill(0));

    // Check if the start or end is blocked
    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) {
        return -1;
    }

    let queue: [number, number, number][] = [[0, 0, 1]]; // [row, col, distance]
    visited[0][0] = 1;

    while (queue.length !== 0) {
        let ele = queue[0];
        queue.shift();  // Remove the first element from the queue

        // Correcting how we access the values from 'ele'
        let r = ele[0];  // row
        let c = ele[1];  // column
        let dis = ele[2]; // distance

        if (r == n - 1 && c == n - 1) return dis;

        // Check 8 possible directions (same as your original logic)
        if (r - 1 >= 0 && c - 1 >= 0 && !visited[r - 1][c - 1] && grid[r - 1][c - 1] == 0) {
            visited[r - 1][c - 1] = 1;
            queue.push([r - 1, c - 1, dis + 1]);
        }
        if (r - 1 >= 0 && !visited[r - 1][c] && grid[r - 1][c] == 0) {
            visited[r - 1][c] = 1;
            queue.push([r - 1, c, dis + 1]);
        }
        if (r - 1 >= 0 && c + 1 < n && !visited[r - 1][c + 1] && grid[r - 1][c + 1] == 0) {
            visited[r - 1][c + 1] = 1;
            queue.push([r - 1, c + 1, dis + 1]);
        }
        if (c + 1 < n && !visited[r][c + 1] && grid[r][c + 1] == 0) {
            visited[r][c + 1] = 1;
            queue.push([r, c + 1, dis + 1]);
        }
        if (c - 1 >= 0 && !visited[r][c - 1] && grid[r][c - 1] == 0) {
            visited[r][c - 1] = 1;
            queue.push([r, c - 1, dis + 1]);
        }
        if (r + 1 < n && c + 1 < n && !visited[r + 1][c + 1] && grid[r + 1][c + 1] == 0) {
            visited[r + 1][c + 1] = 1;
            queue.push([r + 1, c + 1, dis + 1]);
        }
        if (r + 1 < n && !visited[r + 1][c] && grid[r + 1][c] == 0) {
            visited[r + 1][c] = 1;
            queue.push([r + 1, c, dis + 1]);
        }
        if (r + 1 < n && c - 1 >= 0 && !visited[r + 1][c - 1] && grid[r + 1][c - 1] == 0) {
            visited[r + 1][c - 1] = 1;
            queue.push([r + 1, c - 1, dis + 1]);
        }
    }

    return -1; // Return -1 if no path is found
}
