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

function pathSum(root: TreeNode | null, targetSum: number): number {
    
let result = []
    const mpp: Map<number, number> = new Map();
    mpp.set(0, 1);
    let ans = { count: 0 };
    dfs(root, targetSum,0, mpp,ans);
    return ans.count;
};

function dfs(root,targetSum,sum,mpp,ans){
    if (root === null) return;
    
    ans.count += (mpp.get(sum + root.val - targetSum) || 0);
    mpp.set(sum + root.val, (mpp.get(sum + root.val) || 0) + 1);

    dfs(root.left, targetSum, sum + root.val,mpp,ans);
    dfs(root.right, targetSum, sum + root.val,mpp,ans);

    mpp.set(sum + root.val, mpp.get(sum + root.val) - 1);
}