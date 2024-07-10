function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    let m = mat.length;
    let n = mat[0].length;
    if(m*n != r*c) return mat;

    let k=0;
    let l=0;
    let matrix = Array.from({length: r}, ()=> new Array(c).fill(0));
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            matrix[l][k]=mat[i][j];
            k++;
            if(k==c){
                k=0;
                l++;
            }
        }
    }

    return matrix;
    
};