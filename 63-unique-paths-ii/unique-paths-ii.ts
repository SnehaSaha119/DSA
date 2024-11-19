function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }
    let dp = Array.from({ length: m }, () => new Array(n).fill(-1))
    return rec(m-1,n-1,m,n,dp,obstacleGrid)
}

function rec(r,c,m,n,dp,obstacleGrid){
    if(r<0 || r>=m || c<0 || c>=n || obstacleGrid[r][c]==1)
        return 0

    if(r==0 && c==0)
        return 1
    
    if(dp[r][c]!==-1)
        return dp[r][c]
    else{
        const fromTop = r > 0 ? rec(r - 1, c,m,n, dp, obstacleGrid) : 0;
        const fromLeft = c > 0 ? rec(r, c - 1,m,n, dp, obstacleGrid) : 0;

        dp[r][c] = fromTop + fromLeft;
        return dp[r][c];
    }
}