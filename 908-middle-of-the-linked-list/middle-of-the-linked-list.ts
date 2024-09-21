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

function middleNode(head: ListNode | null): ListNode | null {
    // let traverse = head
    // let count = 0
    // while(traverse.next!=null){
    //     traverse = traverse.next
    //     count++
    // }
    // traverse = head
    // let mid = Math.floor(count/2)
    // while(count!=mid){
    //     traverse = traverse.next
    //     count--
    // }

    let traverse1 = head.next
    let traverse2 = head
    while(traverse1){
        traverse1 = (traverse1.next)?.next
        traverse2 = traverse2.next
    }
    return traverse2
};