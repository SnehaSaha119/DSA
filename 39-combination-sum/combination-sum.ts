function combinationSum(candidates: number[], target: number): number[][] {
    let ans = [];
    let ds = [];
    candidates.sort((a, b) => a - b);
    recur(candidates, 0, target, ds, ans);
    return ans;
    
};

function recur(candidates,index, target, ds, ans) {
    let sum = ds.reduce((a,b)=>a+b,0)
    if(sum==target){
        ans.push([...ds]);
        return
    }
    if(sum>target)
        return

    for (let i = index; i < candidates.length; i++) {
        ds.push(candidates[i]);
        recur(candidates,i,target, ds, ans);
        ds.pop();
    }
}