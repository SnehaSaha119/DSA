function numDistinct(s: string, t: string): number {
    let dp = Array.from({length: 1000},()=>new Array(1000).fill(-1))
    return rec(0,0,s,t,dp)
};

function rec(i,j,s,t,dp){
    if(j==t.length) return 1
    if(i==s.length) return 0
    
    if(dp[i][j]!=-1) return dp[i][j]
    dp[i][j] = 0
    if(s[i]==t[j]) dp[i][j] += rec(i+1,j+1,s,t,dp)
    dp[i][j] += rec(i+1,j,s,t,dp)
    return dp[i][j]
}