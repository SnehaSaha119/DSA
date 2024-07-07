function maximumGap(nums: number[]): number {

    if(nums == null || nums.length < 2) return 0;

    let maxGap = 0;

    nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length-1;i++){
       maxGap = Math.max(maxGap, nums[i+1]-nums[i]);
    }

    return maxGap;
    
};