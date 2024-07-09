function transpose(matrix: number[][]): number[][] {
    
    let n = matrix.length;
    let m = matrix[0].length;
    let mat = Array.from({length:m},() => new Array(n));

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            mat[j][i]=matrix[i][j];
        }
    }

    return mat;
};