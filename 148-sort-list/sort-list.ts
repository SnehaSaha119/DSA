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

function sortList(head: ListNode | null): ListNode | null {
    head = mergeSort(head)
    return head
};

function middleNode(head){

  if (head === null || head.next === null) {
    return head;
  }

  let slow = head
  let fast = head.next

  while(fast !== null && fast.next !== null){
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function mergeLinkedList(list1, list2) {
  let newNode = new ListNode(0);
  let temp = newNode;
  
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  
  if (list1 !== null) {
    temp.next = list1;
  } else if (list2 !== null) {
    temp.next = list2;
  }

  return newNode.next;
}


function mergeSort(head){

  if (head === null || head.next === null) {
    return head;
  }

  let middle = middleNode(head)
  let right = middle.next;
  middle.next = null;
  let left = head;

  left = mergeSort(left)
  right = mergeSort(right)

  return mergeLinkedList(left,right)

}