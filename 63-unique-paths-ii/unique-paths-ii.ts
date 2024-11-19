function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    // Handle edge case: start or end point is blocked
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }

    let dp = Array.from({ length: m }, () => new Array(n).fill(-1));

    return rec(m - 1, n - 1, dp, obstacleGrid);
}

function rec(r: number, c: number, dp: number[][], obstacleGrid: number[][]): number {
    // If out of bounds or encountering an obstacle
    if (r < 0 || c < 0 || obstacleGrid[r][c] === 1) {
        return 0;
    }

    // Base case: Reached the starting cell
    if (r === 0 && c === 0) {
        return 1;
    }

    // If already computed, return the cached result
    if (dp[r][c] !== -1) {
        return dp[r][c];
    }

    // Calculate the number of paths from top and left
    const fromTop = r > 0 ? rec(r - 1, c, dp, obstacleGrid) : 0;
    const fromLeft = c > 0 ? rec(r, c - 1, dp, obstacleGrid) : 0;

    dp[r][c] = fromTop + fromLeft;
    return dp[r][c];
}