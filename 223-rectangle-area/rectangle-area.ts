function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
    let area1 = (ax2 - ax1) * (ay2 - ay1);
    let area2 = (bx2 - bx1) * (by2 - by1);
    // x overlap
    let left = Math.max(ax1,bx1)
    let right = Math.min(ax2,bx2)
    let xover = right-left;

    //y overlap
    let up = Math.min(ay2,by2)
    let down = Math.max(by1,ay1)
    let yover = up-down;

    let area3 = 0
    if(xover>0 && yover>0){
        area3 = xover*yover
    }

    return area1 + area2 - area3;
};