function combinationSum2(candidates: number[], target: number): number[][] {
    let ans = [];
    let ds = [];
    candidates.sort((a, b) => a - b);
    recur(candidates, 0, target, 0, ds, ans);
    return ans;

};

function recur(candidates, index, target, sum, ds, ans) {

    if(sum==target)
        ans.push([...ds]);
    if(sum>target)
        return

    for (let i = index; i < candidates.length; i++) {

        if(i>index && candidates[i]==candidates[i-1]) continue;

        sum=sum+candidates[i]
        ds.push(candidates[i]);
        recur(candidates, i + 1,target,sum, ds, ans);
        sum=sum-candidates[i]
        ds.pop();
    }
}