function findGCD(nums: number[]): number {

    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let n = nums.length;

    for(let i=0;i<n;i++){
        min = Math.min(min,nums[i]);
        max = Math.max(max,nums[i]);
    }

    return gcd(max,min);
    
};

function gcd(a,b){
    if(a==0) return b;
    if(b==0) return a;

    return gcd(b,a%b)
}