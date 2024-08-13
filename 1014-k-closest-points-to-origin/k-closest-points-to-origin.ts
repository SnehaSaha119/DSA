function kClosest(points: number[][], k: number): number[][] {
    quickSort(points, 0, points.length - 1, k - 1);
    let result = Array.from({ length: k }, (_, i) => points[i]);
    return result;
}

function quickSort(points: number[][], start: number, end: number, targetIndex: number): void {
    if (start >= end) return;
    
    let pivot = points[end];
    let position = start;

    for (let i = start; i < end; i++) {
        if (distanceFromOrigin(points[i]) <= distanceFromOrigin(pivot)) {
            swap(points, i, position);
            position++;
        }
    }
    swap(points, position, end);

    if (position === targetIndex) return;
    if (position > targetIndex)
        quickSort(points, start, position - 1, targetIndex);
    else
        quickSort(points, position + 1, end, targetIndex);
}

function distanceFromOrigin(point: number[]): number {
    return point[0] * point[0] + point[1] * point[1];
}

function swap(points: number[][], i: number, j: number): void {
    let temp = points[i];
    points[i] = points[j];
    points[j] = temp;
}
