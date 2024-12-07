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

function findBottomLeftValue(root: TreeNode | null): number {
    if(!root) return null
    let queue = []
    let ans
    queue.push(root)

    while(queue.length>0){
        let l = queue.length
        for(let i=0;i<l;i++){
            let ele = queue.shift()
            if(i==0)
                ans = ele.val

            if(ele.left) queue.push(ele.left)
            if(ele.right) queue.push(ele.right)
        }
    }

    return ans
};