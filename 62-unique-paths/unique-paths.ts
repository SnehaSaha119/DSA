// function uniquePaths(m: number, n: number): number {
//     // Create an empty 2D table
//     let arr = new Array(m);
//     for(let i = 0; i < m; i++) {
        
//         arr[i] = new Array(n);
//         for(let j = 0; j < n; j++) {
//             arr[i][j] = -1;
//         }
//     }
//     let result = paths(m,0,n,0,arr)

//     return result
    
// };

// function paths(m,i,n,j,arr){

//     // if(i==m-1 && j==n-1) return 1
//     // if(i>=m || j>=n) return 0
//     // else return paths(m,i+1,n,j) + paths(m,i,n,j+1)

//     // if(i==m-1 && j==n-1) return 1
//     // if(i>=m || j>=n) return 0
//     // if(arr[i][j]!=-1) return arr[i][j]
//     // else return arr[i][j] = paths(m,i+1,n,j,arr) + paths(m,i,n,j+1,arr)

//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             if(i==0 || j==0) arr[i][j] = 1
//             else arr[i][j] = arr[i][j-1]+arr[i-1][j]
//         }
//     }

//     return arr[m-1][n-1]
// }

function uniquePaths(m: number, n: number): number {
    let dp = Array.from({ length: m }, () => new Array(n).fill(-1))
    return rec(m-1,n-1,m,n,dp)
}

function rec(r,c,m,n,dp){
    if(r<0 || r>=m || c<0 || c>=n)
        return 0

    if(r==0 || c==0)
        return 1
    
    if(dp[r][c]!==-1)
        return dp[r][c]
    else
        return dp[r][c] = rec(r-1,c,m,n,dp) + rec(r,c-1,m,n,dp)
}