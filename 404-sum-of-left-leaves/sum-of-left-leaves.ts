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

function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum = { value: 0 }
    traversal(root,sum)
    return sum.value
};

function traversal(node,sum){
    if(!node) return;

    let left = node.left;
    let right = node.right;

    if(!left && !right) return;

    if(left && !left.right && !left.left) {
        sum.value += left.val;
    }

    traversal(left,sum);
    traversal(right,sum);
}