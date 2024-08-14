function findPairs(nums: number[], k: number): number {
    nums.sort((a,b)=> a-b);
    let left =0;
    let right = 1;
    let res = 0;

    while(left<nums.length && right<nums.length){
        if(left==right || nums[right]-nums[left]<k){
            right++;
        }else if(nums[right]-nums[left]>k){
            left++
        }else{
            left++;
            res++;
            while(left<nums.length && nums[left]==nums[left-1])
                left++
        }
    }

    return res;
    
};