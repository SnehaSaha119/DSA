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

function inorderTraversal(root: TreeNode | null): number[] {

    if(!root) return []

    let result = []
    
    traversal(root,result)

    return result
    
};

function traversal(temp: TreeNode,result){
    if(temp){

        if(temp.left) traversal(temp.left,result)
            result.push(temp.val)
        if(temp.right) traversal(temp.right,result)
    }
}