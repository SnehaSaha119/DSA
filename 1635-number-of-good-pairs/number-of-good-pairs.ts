function numIdenticalPairs(nums: number[]): number {
    //-----brute
    // let n=nums.length;
    // let count=0;

    // for(let i=0;i<n-1;i++){
    //     for(let j=0;j<n;j++){
    //         if(i<j && nums[i]==nums[j]) count++;
    //     }
    // }

    // return count;

    //---better
    let n=nums.length;
    let count=0;
    let map = {};

    for(let i=0;i<n;i++){
        if(map[nums[i]]){
            count = count + map[nums[i]];
            map[nums[i]]++;
        }else{
            map[nums[i]] = 1;
        }
    }

    return count;
    
};