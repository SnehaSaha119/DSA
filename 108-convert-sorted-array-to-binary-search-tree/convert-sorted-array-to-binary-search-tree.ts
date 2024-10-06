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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return construct(nums,0,nums.length-1)
};

function construct(nums,l,h){
    if(l>h) return null
    let m = Math.floor((l+h)/2)
    let ele = nums[m]
    let root = new TreeNode(ele)
    root.left = construct(nums,l,m-1)
    root.right = construct(nums,m+1,h)

    return root
}