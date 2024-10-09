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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const map = new Map()
    inorder.forEach((value,index)=> map.set(value,index))
    return solve(inorder,0,inorder.length-1,postorder,0,postorder.length-1,map)
};

function solve(inorder,inStart,inEnd,postorder,poStart,poEnd,map){
    if (poStart > poEnd || inStart > inEnd) return null
    
    let root = new TreeNode(postorder[poEnd])
    let inRoot = map.get(postorder[poEnd])
    const numsLeft = inRoot - inStart;

    root.left = solve(inorder,inStart,inRoot-1,postorder,poStart,poStart+numsLeft-1,map)
    root.right = solve(inorder,inRoot+1,inEnd,postorder,poStart+numsLeft,poEnd-1,map)

    return root
}