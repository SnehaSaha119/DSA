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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let ans = { value: null }
    solve(root, p, q, ans);
    return ans.value
};

function solve(root, p, q, ans) {
        if (root === null) return false;

        let left = solve(root.left, p, q, ans);
        let right = solve(root.right, p, q, ans);

        if (ans.value === null) {
            if (left && right) {
                ans.value = root;
            } else if ((left || right) && (root.val === p.val || root.val === q.val)) {
                ans.value = root;
            }
        }

        return left || right || (root.val === p.val || root.val === q.val);
    }