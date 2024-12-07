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

function maxLevelSum(root: TreeNode | null): number {
    if (!root) return 0;

  let queue: TreeNode[] = [root]; // Queue for level-order traversal
  let level = 0;
  let maxSum = -Infinity;
  let resultLevel = 0;

  while (queue.length > 0) {
    let levelSize = queue.length; // Number of nodes at the current level
    let currentLevelSum = 0;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()!;
      currentLevelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (currentLevelSum > maxSum) {
      maxSum = currentLevelSum;
      resultLevel = level + 1;
    }

    level++;
  }

  return resultLevel;
};