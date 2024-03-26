/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //Better approach O(N) + O(N)
    // let count0 = 0
    // let count1 = 0
    // let count2 = 0

    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]==0) count0++
    //     else if(nums[i]==1) count1++
    //     else if(nums[i]==2) count2++

    // }

    // let k=0

    // while(count0!=0){
    //     nums[k]=0
    //     k++
    //     count0--
    // }

    // while(count1!=0){
    //     nums[k]=1
    //     k++
    //     count1--
    // }

    // while(count2!=0){
    //     nums[k]=2
    //     k++
    //     count2--
    // }

    // return nums

    //Optimized O(N)

    let low = 0
    let high = nums.length-1
    let mid = 0

    while(mid<=high){
        if(nums[mid]==0){
            let temp = nums[mid]
            nums[mid] = nums[low]
            nums[low] = temp
            low++
            mid++
        }else if(nums[mid]==1){
            mid++
        }else if(nums[mid]==2){
            let temp = nums[mid]
            nums[mid] = nums[high]
            nums[high] = temp
            high--
        }
    }
};