function subsets(nums: number[]): number[][] {

    let res = []
    let subset = []
    calSub(nums,res, subset, 0);

    return res

};



function calSub(nums,res,subset,start){
    res.push([...subset]);
    for(let i=start;i<nums.length;i++){
        subset.push(nums[i])

        calSub(nums,res,subset,i+1)

        subset.pop()
    }
}