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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return dfs(root,targetSum)
};

function dfs(node,targetSum){
    if (!node) return false;
   
    if (!node.left && !node.right) {
        if(targetSum-node.val===0) return true
        else return false
    }

    return dfs(node.left, targetSum-node.val) || dfs(node.right, targetSum-node.val);
}