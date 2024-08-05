function combinationSum3(k: number, n: number): number[][] {
    let ds=[];
    let ans=[]
    rec(k,n,1,ds,ans)
    return ans
};

function rec(k,n,index,ds,ans){
    if(ds.length===k && n===0){
        ans.push([...ds])
        return
    }

    if (ds.length >= k || n < 0) {
        return;
    }

    for(let i=index;i<=9;i++){
        ds.push(i)
        rec(k,n-i,i+1,ds,ans)
        ds.pop(i)
    }
}