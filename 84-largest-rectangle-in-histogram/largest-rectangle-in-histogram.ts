function largestRectangleArea(heights: number[]): number {
    const n = heights.length;
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    const stack: number[] = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        left[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    stack.length = 0;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        right[i] = stack.length > 0 ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        const width = right[i] - left[i] - 1;
        maxArea = Math.max(maxArea, heights[i] * width);
    }

    return maxArea;
}
