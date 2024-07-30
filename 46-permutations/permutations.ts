function permute(nums: number[]): number[][] {

    let ans = [];
    let ds = [];
    let freq = new Array(nums.length).fill(false)

    recur(nums,ds,ans,freq);

    return ans;
    
};

function recur(nums,ds,ans,freq){

    if(ds.length===nums.length){
        ans.push([...ds])
        return;
    }

    for(let i=0;i<nums.length;i++){
        if(!freq[i]){
            freq[i]=true;
            ds.push(nums[i]);
            recur(nums,ds,ans,freq);
            ds.pop();
            freq[i]=false;
        }
    }
}