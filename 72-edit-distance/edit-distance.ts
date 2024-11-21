function minDistance(word1: string, word2: string): number {
    let dp = Array.from({ length: 500 }, () => new Array(500).fill(-1))
    return rec(0,0,word1,word2,dp)
}

function rec(index1,index2,word1,word2,dp){
    if(index1>=word1.length)
        return word2.length-index2

    if(index2>=word2.length)
        return word1.length-index1

    if(dp[index1][index2]!=-1)
        return dp[index1][index2]
    
    if(word1[index1]==word2[index2])
        return rec(index1+1,index2+1,word1,word2,dp)
    else{
        return dp[index1][index2] = 1 + Math.min(
            rec(index1+1,index2,word1,word2,dp),
            rec(index1,index2+1,word1,word2,dp),
            rec(index1+1,index2+1,word1,word2,dp))
    }
}