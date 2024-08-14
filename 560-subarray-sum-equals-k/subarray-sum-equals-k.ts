function subarraySum(nums: number[], k: number): number {

    let count = 0;
    let n = nums.length;
    let sum = new Array(n+1).fill(0);

    for(let i=1;i<=n;i++){
        sum[i] = sum[i-1]+nums[i-1];
    }

    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            if(sum[j]-sum[i]==k) count++
        }
    }

    return count;
    
};