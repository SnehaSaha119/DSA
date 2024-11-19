function numDecodings(s: string): number {
if (!s || s.length === 0 || s[0] === '0') return 0;

    let n = s.length;
    let dp = new Array(n).fill(-1);

    return rec(0,s,dp,n); 
};

function rec(index,s,dp,n) {
        if (index === n) return 1;

        if (dp[index] !== -1) return dp[index];

        if (s[index] === '0') return 0;

        let ways = rec(index + 1,s,dp,n);

        if (index + 1 < n) {
            let twoDigit = parseInt(s.substring(index, index + 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                ways += rec(index + 2,s,dp,n);
            }
        }

        dp[index] = ways;
        return ways;
}