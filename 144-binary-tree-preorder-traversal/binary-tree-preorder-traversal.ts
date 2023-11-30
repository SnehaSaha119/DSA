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

function preorderTraversal(root: TreeNode | null): number[] {
    
    if(!root) return []

    let result = []
    let stack = [root]

    while(stack.length>0){
        let temp = stack.pop()
        result.push(temp.val)
        if(temp.right) stack.push(temp.right)
        if(temp.left) stack.push(temp.left)
        
    }

    return result
};