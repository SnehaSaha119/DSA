function reversePairs(nums: number[]): number {
    return mergeSort(nums, 0, nums.length - 1);
};

function mergeSort(nums, start, end) {
    if (start >= end) return 0;

    const mid = Math.floor((start + end) / 2);
    let count = mergeSort(nums, start, mid) + mergeSort(nums, mid + 1, end);
    
    count += countReversePairs(nums, start, mid, end);
    merge(nums, start, mid, end);
    
    return count;
}

function countReversePairs(nums, start, mid, end) {
    let count = 0;
    let j = mid + 1;

    for (let i = start; i <= mid; i++) {
        while (j <= end && nums[i] > 2 * nums[j]) {
            j++;
        }
        count += j - (mid + 1);
    }
    
    return count;
}

function merge(nums, start, mid, end) {
    const temp = [];
    let left = start, right = mid + 1;

    while (left <= mid && right <= end) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left++]);
        } else {
            temp.push(nums[right++]);
        }
    }

    while (left <= mid) temp.push(nums[left++]);
    while (right <= end) temp.push(nums[right++]);

    for (let i = start; i <= end; i++) {
        nums[i] = temp[i - start];
    }
}
