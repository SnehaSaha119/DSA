/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {

    let n = matrix.length;
    let m = matrix[0].length;

    //----brute

    let ans = Array.from({length: n}, ()=> new Array(m));

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            ans[j][n-1-i] = matrix[i][j]
        }
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            matrix[i][j] = ans[i][j];
        }
    }

    //---optimized


    
};