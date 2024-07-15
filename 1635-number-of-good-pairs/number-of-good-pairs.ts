function numIdenticalPairs(nums: number[]): number {

    let n=nums.length;
    let count=0;

    for(let i=0;i<n-1;i++){
        for(let j=0;j<n;j++){
            if(i<j && nums[i]==nums[j]) count++;
        }
    }

    return count;
    
};