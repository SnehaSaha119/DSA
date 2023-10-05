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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head1=list1
    let head2=list2
    let head3=null;
    let p=head3
    while(head1!=null && head2!=null){
        console.log(head3)
        if(head1.val<=head2.val){
            if(head3==null){
                head3=head1
                head1=head1.next
                head3.next=null
                p=head3
            }else{
            p.next=head1
            head1=head1.next
            p=p.next
            p.next=null
            }
        }else if(head2.val<head1.val){
            if(head3==null){
                head3=head2
                head2=head2.next
                head3.next=null
                p=head3
            }else{
            
            p.next=head2
            head2=head2.next
            p=p.next
            p.next=null
            }
        }
    }

    while(head1!=null){
        if(head3==null){
                head3=head1
                head1=head1.next
                head3.next=null
                p=head3
        }else{

        p.next=head1
        head1=head1.next
        p=p.next
        p.next=null
        }
    }

    while(head2!=null){
        if(head3==null){
                head3=head2
                head2=head2.next
                head3.next=null
                p=head3
            }else{
            
            p.next=head2
            head2=head2.next
            p=p.next
            p.next=null
            }
    }

    return head3

};