function generate(numRows: number): number[][] {

    //---Brute force----
    // if(numRows==0) return
    // else if(numRows==1) return [[1]]
    // else if(numRows==2) return [[1],[1,1]]
    // else{
    //     let arr = [[1],[1,1]]
    //     let l
    //     for(let i=3;i<=numRows;i++){
    //         l = arr[i-2].length
    //         let j=0
    //         let temp = []
    //         while(j<l){
    //             if(j==0){
    //                 temp.push(arr[i-2][j])
    //                 temp.push(arr[i-2][j]+arr[i-2][j+1])
    //             } else if (j==(l-1)){
    //                 temp.push(arr[i-2][j])
    //             }
    //             else{
    //                 temp.push(arr[i-2][j]+arr[i-2][j+1])
    //             }
    //             j++
    //         }
    //         arr.push(temp)
    //     }
    //     return arr
    // }

    //----Optimized

    let result = Array.from(Array(numRows), () => []);
    if(numRows==1) return [[1]]

    let p1 = 0
    let p2 = 0
    let i = 0
    
    result[0][0] = 1

    while(i < numRows - 1) {
        if(p1 === p2) {
            result[i+1].push(result[i][p1])
            p2++
        } else if(!result[i][p2]) {
            result[i+1].push(result[i][p1])
            i++
            p2 = 0
            p1 = 0
        } else {
            result[i+1].push(result[i][p1] + result[i][p2])
            p2++
            p1++
        }
    }

    return result


};