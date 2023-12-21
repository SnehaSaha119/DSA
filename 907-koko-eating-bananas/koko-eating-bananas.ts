function minEatingSpeed(piles: number[], h: number): number {
    let low=1
    let high=Math.max(...piles)
    let mid = 0
    while(low<high){
      mid=Math.floor((low+high)/2)
   
      if(calNoOfBananas(piles,mid)<=h) high=mid
      else low=mid+1
    }

    return low
};


function calNoOfBananas(piles,midTime){
    let noOfBananas = 0
    for(let i=0;i<piles.length;i++){
        noOfBananas = noOfBananas + Math.ceil(piles[i]/midTime)
    }

    return noOfBananas
}