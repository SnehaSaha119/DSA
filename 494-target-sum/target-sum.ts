function findTargetSumWays(nums: number[], target: number): number {
    let count = { value: 0 }; // Wrapper object to hold the count
    calculate(0, 0, count, nums, target);
    return count.value;
}

function calculate(index: number, sum: number, count: { value: number }, nums: number[], target: number): void {
    if (index === nums.length) {
        if (sum === target) {
            count.value++;
        }
        return;
    }
    calculate(index + 1, sum + nums[index], count, nums, target);
    calculate(index + 1, sum - nums[index], count, nums, target);
}
