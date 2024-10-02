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
function kthSmallest(root: TreeNode | null, k: number): number {
    let ans = { value: null }
    inorder(root, ans, { k });
    return ans.value
}

function inorder(root, ans, state: { k: number }): number | null {
    if (root === null || ans.value !== null) return;

    if(root.left) inorder(root.left,ans, state);
    state.k--;
    if (state.k === 0){
        ans.value = root.val
        return;

    } 
    if(root.right) inorder(root.right,ans, state);
}
