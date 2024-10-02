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

function isValidBST(root: TreeNode | null): boolean {
    return check(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};

function check(root,mini,maxi){
    if(root==null) return true
    if(root.val<mini || root.val>maxi) return false
    return check(root.left,mini,root.val-1) && check(root.right,root.val+1,maxi)
}