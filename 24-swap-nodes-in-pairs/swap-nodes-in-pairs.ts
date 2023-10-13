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

function swapPairs(head: ListNode | null): ListNode | null {
    if(head==null || head.next==null) return head
        
        let p = head
        let q = head.next
        let prev;

        console.log("*1**",head)
        p.next = q.next
        q.next = p
        head = q
        console.log("*2**",head,p,q)
        if(p.next!=null && (p.next).next!=null){
            prev = p
            p = p.next
            q = p.next
        }else return head
        console.log("*3**",head)
        while(true){
            p.next = q.next
            q.next = p
            prev.next = q
            prev = p
            if(p.next!=null && (p.next).next!=null){
                p = p.next
                q = p.next
            }else break
        }

        return head
};