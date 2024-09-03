function longestOnes(nums: number[], k: number): number {
    let i = 0;
    let j = 0;
    let count = 0;
    let maxLength = 0;

    while (j < nums.length) {
        if (nums[j] === 0) {
            count++;
        }

        while (count > k) {
            if (nums[i] === 0) {
                count--;
            }
            i++;
        }

        maxLength = Math.max(maxLength, j - i + 1);
        j++;
    }

    return maxLength;
}
