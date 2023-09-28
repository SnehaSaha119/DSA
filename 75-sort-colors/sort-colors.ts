/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {

    //----Brute force-----  
    let count0 = 0
    let count1 = 0
    let count2 = 0

    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) count0++
        if(nums[i]==1) count1++
        if(nums[i]==2) count2++
    }

    let i=0
    while(count0!=0){
        nums[i]=0
        i++
        count0--
    }
    while(count1!=0){
        nums[i]=1
        i++
        count1--
    }
    while(count2!=0){
        nums[i]=2
        i++
        count2--
    }

};