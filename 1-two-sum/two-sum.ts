function twoSum(nums: number[], target: number): number[] {
    let map={};

    for(let i=0;i<nums.length;i++){
        //console.log(map)
        let rem=target-nums[i]
        //console.log(map[rem])
        if(Object.keys(map).includes(rem.toString())){
            return [map[rem],i]
        }else{
            map[nums[i]]=i
        }
    }
};