function maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;
    const ans: number[] = [];
    const dq: number[] = []; // This will store indices of the elements

    // Process the first k elements
    for (let i = 0; i < k; i++) {
        while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
            dq.pop(); // Remove elements not greater than nums[i]
        }
        dq.push(i); // Add current index
    }

    ans.push(nums[dq[0]]); // The first maximum

    // Process the rest of the elements
    for (let i = k; i < n; i++) {
        // Remove indices that are out of the current window
        while (dq.length && dq[0] <= i - k) {
            dq.shift();
        }
        
        // Remove elements not greater than nums[i]
        while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
            dq.pop();
        }
        
        dq.push(i); // Add current index
        ans.push(nums[dq[0]]); // Append the current maximum
    }

    return ans;
}