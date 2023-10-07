/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let count = 0
    let element;

    for(let i=0;i<nums.length;i++){
        if(count==0){
            count=1
            element = nums[i]
        }else if(element==nums[i]) count++
        else count--
    }

    count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==element) count++
    }

    return element
    
};