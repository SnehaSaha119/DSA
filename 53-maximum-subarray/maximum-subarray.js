/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let sum = 0
    let max = Number.MIN_SAFE_INTEGER

    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i]
        max = Math.max(max,sum)
        if(sum<0) sum = 0
    }

    return max
    
};