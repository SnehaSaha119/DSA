function largestSumAfterKNegations(nums: number[], k: number): number {
     nums.sort((a,b)=> a-b)

    for(let i=0;i<nums.length;i++){
        if(nums[i] < 0 && k > 0) {
            k--
            nums[i] = nums[i] * -1
        }
    }
    
    nums.sort((a, b) => a - b);
    if (k % 2 === 1) {
        nums[0] = -nums[0];
    }

    return nums.reduce((sum, num) => sum + num, 0);  
};