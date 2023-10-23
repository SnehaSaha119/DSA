function findDuplicate(nums: number[]): number {

        let n = nums.length
        let count = {};

        for(let i=0;i<=n;i++){
            if(count[nums[i]]) count[nums[i]]++
            else count[nums[i]]=1
        }
        
        for(let i in count){
            if(count[i]>1) return parseInt(i)
        }
};