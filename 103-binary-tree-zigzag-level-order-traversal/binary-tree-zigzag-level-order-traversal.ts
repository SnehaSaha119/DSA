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

function zigzagLevelOrder(root: TreeNode | null): number[][] {

    if(!root) return [];
    let queue = []
    let result = []
    queue.push(root)

    let flag = true
    while(queue.length>0){
        let temp = []
        let l = queue.length
        for(let i=0;i<l;i++){
            let ele = queue.shift()
            temp.push(ele.val)
                
            if(ele.left) queue.push(ele.left)
            if(ele.right) queue.push(ele.right)
            
        }

        if(flag)
            result.push(temp)
        else
            result.push(temp.reverse())
        
        flag = !flag
    }

    return result
    
};