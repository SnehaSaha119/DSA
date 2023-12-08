function numSubarraysWithSum(nums: number[], goal: number): number {
    let l = nums.length
    let count = 0
    for(let i=0;i<l;i++){
        let sum = 0
        for(let j=i;j<l;j++){
            sum = sum + nums[j]
            if(sum==goal) count++
        }
    }

    return count

};