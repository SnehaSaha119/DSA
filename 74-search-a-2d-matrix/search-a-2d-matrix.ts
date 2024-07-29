function searchMatrix(matrix: number[][], target: number): boolean {
    
    for(let i=0;i<matrix.length;i++){ // m
        let arr = matrix[i]

        let result = binary(arr,target) // log n
        if(result==true) return result
    }

    return false
    
};

function binary(arr:number[],target){
    let low=0
    let high=arr.length-1
    let mid;

    while(low<=high){
        mid=Math.floor((low+high)/2)
        //console.log(low,high,mid)

        if(arr[mid]==target) return true
        else if(arr[mid]<target) low=mid+1
        else high=mid-1

        //console.log(low,high,mid)

    }

    return false
}