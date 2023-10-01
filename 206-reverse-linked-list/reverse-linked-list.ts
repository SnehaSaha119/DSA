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

function reverseList(head: ListNode | null): ListNode | null {
    if(head == null) return null
    let p = head
    let q = head.next
    p.next = null
    head = p

    while(q!=null){
        p = q
        q = q.next
        p.next = head
        head = p
    }
    
    return head
};