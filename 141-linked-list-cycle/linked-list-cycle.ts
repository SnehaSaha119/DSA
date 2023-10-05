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

function hasCycle(head: ListNode | null): boolean {

    //Brute force : keep in set the reference visited
    let all = new Set()
    let p = head
    while(p){
        if(all.has(p)) return true
        all.add(p)
        p=p.next
    }

    return false
    
    // if(head == null) return false
    // if(head.next == null) return false
    // let p = head
    // let q = head

    // while(p){
    //     p=(p.next)?.next
    //     q=q.next
    //     if(p==q && p && q) return true
    // }
    
    // return false

};