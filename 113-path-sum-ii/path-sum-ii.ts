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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let result = []
    dfs(root,targetSum, [], result)
    return result
};

function dfs(node,targetSum,ds,result){
    if (!node) return;

    ds.push(node.val)
    if (!node.left && !node.right && targetSum-node.val===0) {
        result.push([...ds])
    }else{
        dfs(node.left, targetSum-node.val,ds,result)
        dfs(node.right, targetSum-node.val,ds,result)
    }

    ds.pop()
}