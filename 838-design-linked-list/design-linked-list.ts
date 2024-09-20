class MyLinkedList {
    private head: ListNode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        return current!.val;
    }

    addAtHead(val: number): void {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    addAtTail(val: number): void {
        const newNode = new ListNode(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        const newNode = new ListNode(val);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current!.next;
        }
        newNode.next = current!.next;
        current!.next = newNode;
        this.size++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) return;
        if (index === 0) {
            this.head = this.head!.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!.next;
            }
            current!.next = current!.next!.next;
        }
        this.size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */