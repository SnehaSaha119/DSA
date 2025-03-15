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

function goodNodes(root: TreeNode | null): number {
    return dfs(root, root ? root.val : -Infinity);

};

function dfs(root,maxVal){
    if (!root) return 0;

        // Count this node if its value is greater than or equal to the max value
        let goodCount = root.val >= maxVal ? 1 : 0;

        // Update the max value along the path
        let newMaxVal = Math.max(maxVal, root.val);

        // Recurse on left and right subtrees
        goodCount += dfs(root.left, newMaxVal);
        goodCount += dfs(root.right, newMaxVal);

        return goodCount;
}