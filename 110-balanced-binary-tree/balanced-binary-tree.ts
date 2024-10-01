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

function isBalanced(root: TreeNode | null): boolean {
    // Helper function to check height of a node's subtree
    function checkHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }

        // Recursively get the height of left subtree
        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1;  // Left subtree is not balanced

        // Recursively get the height of right subtree
        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1;  // Right subtree is not balanced

        // If height difference is more than 1, the tree is not balanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // Return height of the node (max of left/right height + 1)
        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Call the checkHeight helper on the root node
    return checkHeight(root) !== -1;
}
