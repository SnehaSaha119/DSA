function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    // x overlap
    let left = Math.max(rec1[0],rec2[0])
    let right = Math.min(rec1[2],rec2[2])
    let xover = right-left;

    //y overlap
    let up = Math.min(rec1[3],rec2[3])
    let down = Math.max(rec1[1],rec2[1])
    let yover = up-down;

    if(xover>0 && yover>0){
       return true
    }

    return false
    
};