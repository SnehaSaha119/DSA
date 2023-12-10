function partition(s: string): string[][] {
    let ans: string[][] = []
    subPartition(s,s.length,0,[],ans)
    return ans
    
};

function subPartition(s,l,next,arr,ans){
    if(next==s.length){
        ans.push(arr.slice())
        return
    }
    for(let i=next;i<l;i++){
        let str = s.slice(next,i+1)
        if(str==str.toLowerCase().split("").reverse().join("")){
            arr.push(str)
            subPartition(s,l,i+1,arr,ans)
            arr.pop()
        }
    }
}