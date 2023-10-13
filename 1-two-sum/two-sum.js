/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        let map= new Map();

    for(let i=0;i<nums.length;i++){
        //console.log(map)
        let rem=target-nums[i]
        //console.log(map[rem])
        if(map.has(rem)){
            return [map.get(rem),i]
        }else{
            map.set(nums[i],i)
        }
    }
};