function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    let n = difficulty.length
    let dp = []
    for(let i=0;i<n;i++){
        dp.push([difficulty[i],profit[i]])
    }
    dp.sort((a,b)=>a[0]-b[0])
    worker.sort((a,b)=>a-b)

    let j=0;
    let totalProfit = 0
    let maxProfit = 0;
    for(let i=0;i<worker.length;i++){
        while(j<n && dp[j][0]<=worker[i]){
            maxProfit = Math.max(maxProfit, dp[j][1]);
            j++
        }

        totalProfit = totalProfit + maxProfit
    }

    return totalProfit

};