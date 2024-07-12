class NumMatrix {
    sum: number[][];
    constructor(matrix: number[][]) {
        let n = matrix.length;
        let m = matrix[0].length;
        this.sum = Array.from({length:n+1},()=>new Array(m+1).fill(0));

        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                this.sum[i+1][j+1] = matrix[i][j] + this.sum[i][j+1] + this.sum[i+1][j] - this.sum[i][j];
            }
        }
        
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {

        return this.sum[row2+1][col2+1] - this.sum[row1][col2+1] - this.sum[row2+1][col1] + this.sum[row1][col1];
        
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */