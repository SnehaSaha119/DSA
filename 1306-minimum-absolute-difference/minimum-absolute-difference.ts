function minimumAbsDifference(arr: number[]): number[][] {

    // arr.sort((a,b)=>a-b);

    // let minDiff = Number.MAX_SAFE_INTEGER
    // let ans = [];

    // for(let i=0;i<arr.length-1;i++){
    //     let diff = Math.abs(arr[i+1]-arr[i]);
    //     if(diff<minDiff){
    //         minDiff = diff;
    //         ans.push([arr[i],arr[i+1]])
    //     }else if(diff==minDiff){
    //         ans.push([arr[i],arr[i+1]])
    //     }
    // }

    // return ans;

    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    let result = [];

    // Step 2: Find the minimum absolute difference
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            result = [[arr[i - 1], arr[i]]];
        } else if (diff === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }

    // Step 3: Return the result
    return result;
    
};