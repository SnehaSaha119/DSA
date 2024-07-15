function subtractProductAndSum(n: number): number {

    let sum = 0;
    let product = 1;

    while(n!=0){
        let a = n%10;
        sum = sum + a;
        product = product * a;
        n = Math.floor(n / 10);
    }

    return product - sum;
    
};