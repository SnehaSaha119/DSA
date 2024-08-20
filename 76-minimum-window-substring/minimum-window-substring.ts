function minWindow(s: string, t: string): string {

    let start=0;
    let end=0;
    let minLen = Number.MAX_SAFE_INTEGER;
    let countMap = new Map();
    
    for(let i=0;i<t.length;i++){
        if(countMap.has(t[i])) countMap.set(t[i],countMap.get(t[i])+1);
        else countMap.set(t[i], 1);
    }

    let count = countMap.size
    let i=0;
    let j=0;
    while(j<s.length){
        if(countMap.has(s[j])){
            countMap.set(s[j],countMap.get(s[j])-1);
            if(countMap.get(s[j])==0) count--
        }

        while(count==0){
            if(minLen>(j-i+1)){
                minLen = j-i+1
                start=i;
                end=j+1;
            }

            if(countMap.has(s[i])){
                countMap.set(s[i],countMap.get(s[i])+1);
                if(countMap.get(s[i])==1) count++
            }
            i++;
        }
        j++;
    }

    return s.slice(start,end);
    
};