function uniquePaths(m: number, n: number): number {
    // Create an empty 2D table
    let arr = new Array(m);
    for(let i = 0; i < m; i++) {
        
        arr[i] = new Array(n);
        for(let j = 0; j < n; j++) {
            arr[i][j] = -1;
        }
    }
    let result = paths(m,0,n,0,arr)

    return result
    
};

function paths(m,i,n,j,arr){

    // if(i==m-1 && j==n-1) return 1
    // if(i>=m || j>=n) return 0
    // else return paths(m,i+1,n,j) + paths(m,i,n,j+1)

    if(i==m-1 && j==n-1) return 1
    if(i>=m || j>=n) return 0
    if(arr[i][j]!=-1) return arr[i][j]
    else return arr[i][j] = paths(m,i+1,n,j,arr) + paths(m,i,n,j+1,arr)
}