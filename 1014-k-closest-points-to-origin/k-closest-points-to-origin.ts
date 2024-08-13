function kClosest(points: number[][], k: number): number[][] {
    quickSelect(points, 0, points.length - 1, k - 1);
    return points.slice(0, k);
}

function quickSelect(points: number[][], start: number, end: number, targetIndex: number): void {
    if (start >= end) return;
    
    const pivotIndex = partition(points, start, end);
    
    if (pivotIndex === targetIndex) return;
    
    if (pivotIndex > targetIndex) {
        quickSelect(points, start, pivotIndex - 1, targetIndex);
    } else {
        quickSelect(points, pivotIndex + 1, end, targetIndex);
    }
}

function partition(points: number[][], start: number, end: number): number {
    const pivot = points[end];
    const pivotDistance = distanceFromOrigin(pivot);
    let pivotIndex = start;
    
    for (let i = start; i < end; i++) {
        if (distanceFromOrigin(points[i]) <= pivotDistance) {
            swap(points, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(points, pivotIndex, end);
    return pivotIndex;
}

function distanceFromOrigin(point: number[]): number {
    return point[0] * point[0] + point[1] * point[1];
}

function swap(points: number[][], i: number, j: number): void {
    const temp = points[i];
    points[i] = points[j];
    points[j] = temp;
}
