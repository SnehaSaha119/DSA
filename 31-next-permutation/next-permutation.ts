/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {

    let n = nums.length;
    let breakPoint = -1;

    for(let i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            breakPoint = i;
            break;
        }
    }

    if(breakPoint === -1){
        nums.reverse();
        return
    }

    for(let i=n-1;i>breakPoint;i--){
        if(nums[i]>nums[breakPoint]){
            let temp = nums[i];
            nums[i] = nums[breakPoint];
            nums[breakPoint] = temp;
            break;
        }
    }

    //console.log("******",nums)

    let i=breakPoint+1;
    let j=n-1;
    while(i<j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }

    return
    
};