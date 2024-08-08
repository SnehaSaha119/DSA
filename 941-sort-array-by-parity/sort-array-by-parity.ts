function sortArrayByParity(nums: number[]): number[] {

    let l=0;
    let r=nums.length-1;

    while(l<r){
        if(nums[l]%2!=0 && nums[r]%2==0){
            let temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
        }
        if(nums[l]%2==0) l++
        if(nums[r]%2!==0) r--
        
    }

    return nums
    
};