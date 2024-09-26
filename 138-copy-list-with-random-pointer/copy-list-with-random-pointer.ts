/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null;
    insertCopyInBetween(head);
    connectRandomPointers(head);
    return getDeepCopyList(head);
};

function insertCopyInBetween(head: _Node) {
    let temp = head;
    while (temp !== null) {
        let nextElement = temp.next;
        let copy = new _Node(temp.val);  // Fix: use _Node and temp.val
        copy.next = nextElement;
        temp.next = copy;
        temp = nextElement;
    }
}

function connectRandomPointers(head: _Node) {
    let temp = head;
    while (temp !== null) {
        let copyNode = temp.next;
        if (temp.random) {
            copyNode.random = temp.random.next;
        } else {
            copyNode.random = null;
        }
        temp = temp.next.next;
    }
}

function getDeepCopyList(head: _Node) {
    let temp = head;
    let dummyNode = new _Node(-1);
    let res = dummyNode;

    while (temp !== null) {
        res.next = temp.next;
        res = res.next;
        temp.next = temp.next!.next;
        temp = temp.next;
    }
    return dummyNode.next;
}
