function trailingZeroes(n: number): number {

    let res = 0;
    while( n > 0 ){
        n = Math.floor(n/5);
        res += n;
    }
    return res;
    
};