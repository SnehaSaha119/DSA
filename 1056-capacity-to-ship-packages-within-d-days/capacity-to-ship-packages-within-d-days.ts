function shipWithinDays(weights: number[], days: number): number {
    let n = weights.length;

    // Find the maximum weight in the array as the lower bound
    let l = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        l = Math.max(l, weights[i]);
    }

    // Sum of all weights as the upper bound
    let r = 0;
    for (let i = 0; i < n; i++) {
        r += weights[i];
    }

    // Binary search between the lower bound and upper bound
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2);

        if (calNoOfDays(weights, mid) <= days) 
            r = mid;
        else 
            l = mid + 1;
    }

    return l;
}

function calNoOfDays(weights: number[], mid: number): number {
    let noOfTrips = 1; // Start with one trip
    let currentLoad = 0;

    for (let i = 0; i < weights.length; i++) {
        if (currentLoad + weights[i] > mid) {
            noOfTrips++;
            currentLoad = 0;
        }
        currentLoad += weights[i];
    }

    return noOfTrips;
}
