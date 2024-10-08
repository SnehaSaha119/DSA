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

function isPalindrome(head: ListNode | null): boolean {
    let list = [];
    
    let current = head;
    while (current !== null) {
        list.push(current.val);
        current = current.next;
    }
    
    let n = list.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (list[i] !== list[n - i - 1]) {
            return false;
        }
    }
    
    return true;
    
    
};