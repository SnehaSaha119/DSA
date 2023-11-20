function rob(nums: number[]): number {
    
    let oddMax=0;
    let evenMax=0;
        
    for(let i=0;i<nums.length;i=i+1) {
        if (i%2==0) {
            evenMax= evenMax+nums[i];
            evenMax= Math.max(evenMax,oddMax); 
        } else {
            oddMax= oddMax+nums[i];
        oddMax= Math.max(oddMax,evenMax);    
        }
        
    }
        
    return Math.max(oddMax,evenMax);

    
};