function diagonalSum(mat: number[][]): number {

    let sum1 = 0;
    let sum2 = 0;
    let n = mat.length

    for(let i=0;i<n;i++){
        sum1 = sum1 + mat[i][i];
        if(i!=n-i-1)
        sum2 = sum2 + mat[i][n-i-1];
    }

    return sum1+sum2
    
};