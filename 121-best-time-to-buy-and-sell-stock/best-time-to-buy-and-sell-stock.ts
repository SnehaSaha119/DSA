function maxProfit(prices: number[]): number {
    // let min=prices[0];
    // let max=0;
    
    // for(let i=1;i<prices.length;i++){
    //     min=Math.min(prices[i],min)
    //     max=Math.max(prices[i]-min,max)
    // }

    // return max;

    let min = prices[0]
    let maxProfit = 0

    for(let i=1;i<prices.length;i++){
        min = Math.min(prices[i],min)
        maxProfit = Math.max(prices[i]-min,maxProfit)
    }

    return maxProfit
}