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
    let cur = head
    while(cur){
        if(cur.child){
            let temp = cur.next
            cur.next = cur.child
            cur.child = null
            cur.next.prev = cur
            let p = cur.next
            while(p.next!=null)
                p = p.next

            p.next = temp
            if(temp)
            temp.prev = p
        }
        cur = cur.next
    }

    return head

};