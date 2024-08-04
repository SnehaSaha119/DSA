function grayCode(n: number): number[] {

    if (n === 0) return [0];
    
    const result = [];
    const numCodes = 1 << n;
    
    for (let i = 0; i < numCodes; i++) {
        result.push(i ^ (i >> 1));
    }
    
    return result;
    
};