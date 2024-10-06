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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    let values: number[] = [];
    preOrderTraversal(root, values);
    let current = root;
    for (let i = 0; i < values.length; i++) {
        if (current) {
            current.val = values[i];
            current.left = null;
            if (i < values.length - 1) {
                current.right = new TreeNode();
                current = current.right;
            } else {
                current.right = null;
            }
        }
    }
};

function preOrderTraversal(node: TreeNode | null, values: number[]): void {
    if (!node) return;
    values.push(node.val);
    preOrderTraversal(node.left, values);
    preOrderTraversal(node.right, values);
}