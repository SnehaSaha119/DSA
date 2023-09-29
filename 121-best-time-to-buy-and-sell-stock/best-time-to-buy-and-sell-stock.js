/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //---Brute force---(206/212 passed)
    // let max = 0 //Number.MIN_SAFE_INTEGER
    // for(let i=0;i<prices.length;i++){
    //     for(let j=i+1;j<prices.length;j++){
    //         if((prices[j]-prices[i])>max) max = prices[j]-prices[i]
    //     }
    // }

    // return max

    //----optimized----

    let profit = 0
    let min = prices[0]
    for(let i=1;i<prices.length;i++){
            
        min = Math.min(prices[i],min)
        profit = Math.max(prices[i]-min,profit)
    }

    return profit
};