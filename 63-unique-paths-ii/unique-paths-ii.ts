function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
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
        return dp[r][c] = rec(r - 1, c,m,n, dp, obstacleGrid) + rec(r, c - 1,m,n, dp, obstacleGrid)
    }
}