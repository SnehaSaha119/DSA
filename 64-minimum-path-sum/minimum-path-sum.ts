function minPathSum(grid: number[][]): number {
    let m = grid.length
    let n = grid[0].length
    let dp = Array.from({ length: m }, () => new Array(n).fill(-1))
    return rec(0,0,m,n,dp,grid)
}

function rec(r,c,m,n,dp,grid){
    if(r<0 || r>=m || c<0 || c>=n)
        return Number.MAX_SAFE_INTEGER

    if(r==m-1 && c==n-1)
        return grid[r][c]
    
    if(dp[r][c]!==-1)
        return dp[r][c]
    else{
        return dp[r][c] = grid[r][c] + Math.min(rec(r + 1, c,m,n, dp, grid), rec(r, c + 1,m,n, dp, grid))
    }
}