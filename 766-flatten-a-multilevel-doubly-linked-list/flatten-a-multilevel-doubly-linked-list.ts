/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     prev: _Node | null
 *     next: _Node | null
 *     child: _Node | null
 *     
 *     constructor(val?: number, prev? : _Node, next? : _Node, child? : _Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */


function flatten(head: _Node | null): _Node | null {
    let cur = head;
    
    while (cur) {
        if (cur.child) {
            let temp = cur.next;  // Save the next node
            let child = cur.child;  // Get the child list

            cur.next = child;  // Connect current node to the child list
            child.prev = cur;  // Set the child's prev pointer
            cur.child = null;  // Clear the child pointer

            // Find the tail of the child list
            let p = child;
            while (p.next) {
                p = p.next;
            }

            // Reconnect the tail of the child list to the saved next node
            p.next = temp;
            if (temp) {
                temp.prev = p;  // Set the prev pointer of the next node
            }
        }

        cur = cur.next;  // Move to the next node
    }

    return head;
}
