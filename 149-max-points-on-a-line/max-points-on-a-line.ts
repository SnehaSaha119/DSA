function maxPoints(points: number[][]): number {

    let n = points.length;
    if (n == 1) return 1;

    let ans = 2;

    for (let i = 0; i < n; i++) {
        let slopeMap = new Map();
        
        for (let j = 0; j < n; j++) {
            if (i != j) {
                let dx = points[j][0] - points[i][0];
                let dy = points[j][1] - points[i][1];
                let slope = Math.atan2(dy, dx);
                slopeMap.set(slope, (slopeMap.get(slope) || 1) + 1);
            }
        }
       // Find the maximum value in the slopeMap
        let maxPointsOnSameLine = Math.max(...Array.from(slopeMap.values()));
        ans = Math.max(ans, maxPointsOnSameLine);
    }
    return ans;
};