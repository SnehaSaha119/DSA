function runningSum(nums: number[]): number[] {

    let prefixSum = [nums[0]];

    for(let i=1;i<nums.length;i++){
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }

    return prefixSum

};