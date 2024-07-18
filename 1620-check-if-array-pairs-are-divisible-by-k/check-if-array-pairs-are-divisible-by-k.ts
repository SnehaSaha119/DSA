function canArrange(arr: number[], k: number): boolean {

    let freq = new Array(k).fill(0);

    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i]%k;
        if(arr[i]<0){
            arr[i]=arr[i]+k;
        }
        freq[arr[i]]++
    }

    if(freq[0]%2!=0) return false

    for(let i=1;i<=k/2;i++){
        if(freq[i]!=freq[k-i]) return false
    }

    return true
    
};