function mySqrt(x: number): number {

    if(x<=1) return x
    let low=1
    let high=x
    let mid;
    while(low<=high){
        mid=Math.floor((high+low)/2)
        let square = mid * mid
        if(square <= x && (mid+1) * (mid+1) > x) return mid 
        else if(square<x){
            low=mid+1
        }else{
            high=mid
        }
    }
};