function minimumTime(time: number[], totalTrips: number): number {
     
    let low=0
    let high=Math.min(...time)*totalTrips
    let mid = 0
    while(low<high){
      mid=Math.floor((low+high)/2)
   
      if(calNoOfTrips(time,mid)>=totalTrips) high=mid
      else low=mid+1
    }

    return low
    
};

function calNoOfTrips(time,midTime){
    let noOfTrips = 0
    for(let i=0;i<time.length;i++){
        noOfTrips = noOfTrips + Math.floor(midTime/time[i])
    }

    return noOfTrips
}