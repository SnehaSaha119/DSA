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

function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            break
        }
    }

    if (fast == null || fast.next == null) 
        return null;
    
    let ptr1 = head
    let ptr2 = slow;
    while (ptr1 != ptr2)
    {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
    
};