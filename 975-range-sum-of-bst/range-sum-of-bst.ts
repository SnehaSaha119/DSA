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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {

    let sum = { value: 0 }
    solve(root,low,high,sum)
    return sum.value
    
};

function solve(root,low,high,sum){
    if(root==null)
        return

    if(root.val>=low && root.val<=high){
        sum.value = sum.value + root.val
    }

    solve(root.left,low,high,sum)
    solve(root.right,low,high,sum)
}