
function preimageSizeFZF(k: number): number {
    let left = 0, right = 5 * (k + 1);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const z = trailingZeroes(mid);
        if (z < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return trailingZeroes(left) === k ? 5 : 0;
}

function trailingZeroes(n: number): number {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}