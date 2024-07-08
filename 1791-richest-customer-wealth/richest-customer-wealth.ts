function maximumWealth(accounts: number[][]): number {

    let wealth = Number.MIN_SAFE_INTEGER;
    let sum =0;

    for(let i=0;i<accounts.length;i++){
        sum = 0;
        for(let j=0;j<accounts[0].length;j++){
            sum = sum + accounts[i][j];
        }

        wealth = Math.max(wealth,sum);
    }

    return wealth;
    
};