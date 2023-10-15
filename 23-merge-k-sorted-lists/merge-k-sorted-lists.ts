/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let finalHead = null;

    if(lists.length==0) return finalHead

    let pQ = [];
    let p = null;

    for(let i=0;i<lists.length;i++){
        if(lists[i]!=undefined)
            pQ.push(lists[i]);
    }

    if(pQ.length==0) return finalHead

    pQ.sort((a,b)=>a.val-b.val)

    while(pQ.length>0){
        
        let temp = pQ.shift()

        if(finalHead==null){
            finalHead = temp
            p=finalHead
        }else{
            p.next = temp
            p=p.next
        }
        
        if(temp.next!=null){
            pQ.push(temp.next)
            pQ.sort((a,b)=>a.val-b.val)
        }
    }

    return finalHead
};