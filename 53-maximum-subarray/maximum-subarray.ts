function maxSubArray(nums: number[]): number {
    //------Brute-force------
    // let max = Number.MIN_SAFE_INTEGER
    // for(let i=0;i<nums.length;i++){
    //     let sum=0
    //     for(let j=i;j<nums.length;j++){
    //         sum=sum+nums[j]
    //         if(sum>max) max=sum
    //     }
    // }

    // return max

    //-----optimized-------
   
    let sum=0
    let max = Number.MIN_SAFE_INTEGER
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
        if(sum>max) max=sum
        if(sum<0) 
        {
            sum=0
            //console.log("88888")
        }

        console.log(sum)
    }

    return max

};