function generate(numRows: number): number[][] {

    if(numRows==0) return
    else if(numRows==1) return [[1]]
    else if(numRows==2) return [[1],[1,1]]
    else{
        let arr = [[1],[1,1]]
        let l
        for(let i=3;i<=numRows;i++){
            l = arr[i-2].length
            let j=0
            let temp = []
            while(j<l){
                if(j==0){
                    temp.push(arr[i-2][j])
                    temp.push(arr[i-2][j]+arr[i-2][j+1])
                } else if (j==(l-1)){
                    temp.push(arr[i-2][j])
                }
                else{
                    temp.push(arr[i-2][j]+arr[i-2][j+1])
                }
                j++
            }
            arr.push(temp)
        }
        return arr
    }
};