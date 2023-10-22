function merge(intervals: number[][]): number[][] {

    intervals.sort((a,b)=>a[0]-b[0])
    let final = [[intervals[0][0],intervals[0][1]]]
    let j = 0
    for(let i=1;i<intervals.length;i++){  
        let temp = []     
        if(intervals[i][0]<=final[j][1]){
           temp = (intervals[i][1]>=final[j][1]) ? [final[j][0],intervals[i][1]] : [final[j][0],final[j][1]]
           final.pop()
           final.push(temp)
        }else{
            final.push(intervals[i])
            j++
        }
        console.log(final)
    }

    return final

    // [5,8]

    // [1,2] // start = i 0
    // [9,10] // end = i 1
    // [6,9] // end = i 1
    // [1,6] // start = i 0
    // [6,7]
    // [1,9] // start = i 0 and end = i 1
};