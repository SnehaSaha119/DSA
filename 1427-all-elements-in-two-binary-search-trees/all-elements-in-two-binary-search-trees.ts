/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    const freqMap = new Map<number, number>(); // Use Map for better handling of numeric keys
    inorderTraversal(root1, freqMap);
    inorderTraversal(root2, freqMap);
    
    const merged: number[] = [];
    // Iterate through map keys (which are sorted automatically for numbers in Maps)
    Array.from(freqMap.keys()).sort((a, b) => a - b).forEach((key) => {
        const freq = freqMap.get(key)!;
        for (let i = 0; i < freq; i++) {
            merged.push(key);
        }
    });
    
    return merged;
}

function inorderTraversal(root: TreeNode | null, freqMap: Map<number, number>) {
    if (root === null) {
        return;
    }

    inorderTraversal(root.left, freqMap);
    freqMap.set(root.val, (freqMap.get(root.val) || 0) + 1);
    inorderTraversal(root.right, freqMap);
}
