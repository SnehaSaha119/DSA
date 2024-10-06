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

function sumNumbers(root: TreeNode | null): number {
    let ans = { value: 0 }
    dfs(root,0,ans)
    return ans.value
};

function dfs(node,sum,ans){
    if (!node) return 0;
    sum = sum * 10 + node.val;

    if (!node.left && !node.right) {
        ans.value = ans.value + sum
        return;
    }

    dfs(node.left, sum, ans);
    dfs(node.right, sum, ans);
}