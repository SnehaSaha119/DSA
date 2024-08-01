function subsetsWithDup(nums: number[]): number[][] {
    let ans = [];
    let ds = [];
    nums.sort((a, b) => a - b);
    recur(nums, 0, ds, ans);
    return ans;
    
};

function recur(nums, index, ds, ans) {
    ans.push([...ds]);

    for (let i = index; i < nums.length; i++) {

        if(i>index && nums[i]==nums[i-1]) continue;
        ds.push(nums[i]);
        recur(nums, i + 1, ds, ans);
        ds.pop();
    }
}