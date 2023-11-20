function rob(nums: number[]): number {

    let value = new Array(nums.length).fill(-1)
    let result = allSubSequence(nums.length-1,nums,value)
    return result
    
    // let oddMax=0;
    // let evenMax=0;
        
    // for(let i=0;i<nums.length;i=i+1) {
    //     if (i%2==0) {
    //         evenMax= evenMax+nums[i];
    //         evenMax= Math.max(evenMax,oddMax); 
    //     } else {
    //         oddMax= oddMax+nums[i];
    //     oddMax= Math.max(oddMax,evenMax);    
    //     }
        
    // }
        
    // return Math.max(oddMax,evenMax);

    
};

function allSubSequence(index:number,nums:number[],value:number[]){
    if(index==0) return nums[index]
    if(index<0) return 0

    if(value[index]!=-1) return value[index]

    let pick = nums[index] + allSubSequence((index-2),nums,value)
    let notPick = 0 + allSubSequence((index-1),nums,value)

    return value[index] = Math.max(pick,notPick)
}