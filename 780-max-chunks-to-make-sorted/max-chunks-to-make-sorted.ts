function maxChunksToSorted(arr: number[]): number {

    let chunk = 0;
    let maxLeft = 0;

    for(let i=0;i<arr.length;i++){
        maxLeft = Math.max(maxLeft,arr[i]);
        if(maxLeft==i) chunk++;
    }

    return chunk;
    
};