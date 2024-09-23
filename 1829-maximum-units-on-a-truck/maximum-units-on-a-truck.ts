function maximumUnits(boxTypes: number[][], truckSize: number): number {

    boxTypes.sort((a,b)=>b[1]-a[1])
    let totalNoOfBoxes = 0
    for(let i=0;i<boxTypes.length;i++){
        if(truckSize == 0) break
        while(boxTypes[i][0]!=0 && truckSize>0){
            totalNoOfBoxes = totalNoOfBoxes + boxTypes[i][1]
            truckSize--
            boxTypes[i][0]--
        }
    }

    return totalNoOfBoxes
    
};