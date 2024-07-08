function numSpecial(mat: number[][]): number {
    
    let n = mat.length;
    let m = mat[0].length;
    let row = new Array(n).fill(0);
    let col = new Array(m).fill(0);
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(mat[i][j]==1){
                row[i] = row[i]+1;
                col[j] = col[j]+1;
            }
        }
    }

    //console.log("********",row,col)

    let count = 0;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            if(mat[i][j]==1){
                if(row[i]-1==0 && col[j]-1==0)
                    count++;
            }
        }
    }

    return count;
};