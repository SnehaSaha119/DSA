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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head==null || head.next==null) return head
    let p = head
    let q = head.next
    while(q!=null){
        if(p.val === q.val){
            p.next = q.next
            q = p.next
        }else{
            p = p.next
            if(p.next!=null)
                q = q.next
        }
    }

    return head
    
};