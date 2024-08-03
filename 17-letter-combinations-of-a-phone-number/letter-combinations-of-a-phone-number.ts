let digitMap = [
  [], [], ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], 
  ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], 
  ["t", "u", "v"], ["w", "x", "y", "z"]
];
function letterCombinations(digits: string): string[] {
    let ans = [];
    if (digits.length === 0) return ans;
    let ds = ""
    rec(digits,0,ds,ans);
    return ans;
    
    
};

function rec(digits,index,ds,ans){
    if(index==digits.length){
        ans.push(ds);
        return;
    }

    let digit = digits[index];
    let choice = digitMap[parseInt(digit)];

    for(let i=0;i<choice.length;i++){
        rec(digits,index+1,ds+choice[i],ans)
    }
}