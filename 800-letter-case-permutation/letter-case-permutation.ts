function letterCasePermutation(s: string): string[] {
    let ans = [];
    let ds = "";
    rec(s,0,ds,ans);
    return ans;
    
};

function rec(s,index,ds,ans){

    if(index===s.length){
        ans.push(ds);
        return;
    }

    if(/[a-zA-Z]/.test(s[index])){
        rec(s,index+1,ds+s[index].toLowerCase(),ans);
        rec(s,index+1,ds+s[index].toUpperCase(),ans);
    }else{
        rec(s,index+1,ds+s[index],ans);
    }
}