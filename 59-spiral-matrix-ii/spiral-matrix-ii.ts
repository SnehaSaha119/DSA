function generateMatrix(n: number): number[][] {

    let colStart = 0;
    let colEnd = n-1;
    let rowStart = 0;
    let rowEnd = n-1;
    let count = 1;
    let matrix = Array.from({length: n}, ()=>new Array(n))

    while(count<=n*n){

        //right
        for(let i=colStart;i<=colEnd;i++){
            matrix[rowStart][i] = count;
            count++;
        }
        rowStart++;

        //down
        for(let i=rowStart;i<=rowEnd;i++){
            matrix[i][colEnd] = count;
            count++;
        }
        colEnd--;

        //left
        for(let i=colEnd;i>=colStart;i--){
            matrix[rowEnd][i] = count;
            count++;
        }
        rowEnd--;

        //up
        for(let i=rowEnd;i>=rowStart;i--){
            matrix[i][colStart] = count;
            count++;
        }
        colStart++;
    }

    return matrix
    
};