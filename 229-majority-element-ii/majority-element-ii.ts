function majorityElement(nums: number[]): number[] {

    let element1 = Number.MIN_SAFE_INTEGER
    let element2 = Number.MIN_SAFE_INTEGER;
    let count1 = 0;
    let count2 = 0;
    let ans = []
    let n = nums.length

    for(let i=0;i<n;i++){

        if(count1===0 && element2!=nums[i]){
            element1 = nums[i]
            count1++
        }else if(count2===0 && element1!=nums[i]){
            element2 = nums[i]
            count2++
        }else if(nums[i]===element1) count1++
        else if(nums[i]===element2) count2++
        else {
            count1--
            count2--
        }

    }

    count1=0
    count2=0
    for(let i=0;i<n;i++){
        if(nums[i]===element1) count1++
        if(nums[i]===element2) count2++
    }

    if(count1>(n/3)) ans.push(element1) 
    if(count2>(n/3)) ans.push(element2) 

    return ans

};