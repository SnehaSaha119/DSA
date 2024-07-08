function construct2DArray(original: number[], m: number, n: number): number[][] {

    let mat = []
    if (original.length === m * n) {
        for(let i=0;i<original.length;i=i+n){
            mat.push(original.slice(i,i+n))
        }
    }

    return mat;
    
};