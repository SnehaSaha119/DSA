function groupAnagrams(strs: string[]): string[][] {
    let strsCopy = []
    let result = []
    let matched = new Array(strs.length).fill(0)
    for(let i=0;i<strs.length;i++){
        strsCopy.push(strs[i].toLowerCase().split('').sort().join())
    }

    for(let i=0;i<strsCopy.length;i++){
        if(matched[i]!=1){
            let temp = [strs[i]]
            matched[i]=1
            for(let j=i+1;j<strsCopy.length;j++){
                if(matched[j]!=1 && strsCopy[i]==strsCopy[j]){
                    temp.push(strs[j])
                    matched[j]=1
                }
            }
            result.push(temp)
        }
    }

    return result
    
};