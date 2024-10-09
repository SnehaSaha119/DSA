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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const map = new Map()
    inorder.forEach((value,index)=> map.set(value,index))
    return solve(inorder,0,inorder.length-1,preorder,0,preorder.length-1,map)
};

function solve(inorder,inStart,inEnd,preorder,preStart,preEnd,map){
    if (preStart > preEnd || inStart > inEnd) return null
    
    let root = new TreeNode(preorder[preStart])
    let inRoot = map.get(preorder[preStart])
    const numsLeft = inRoot - inStart;

    root.left = solve(inorder,inStart,inRoot-1,preorder,preStart+1,preStart+numsLeft,map)
    root.right = solve(inorder,inRoot+1,inEnd,preorder,preStart+numsLeft+1,preEnd,map)

    return root
}