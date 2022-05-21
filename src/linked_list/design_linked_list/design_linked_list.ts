class LinkedListNode {

    value: number;
    next: LinkedListNode;

    constructor(value) {
        this.value = value;
    }

}

export class MyLinkedList {

    private head: LinkedListNode;

    constructor() { }

    get(index: number): number {
        let node = this.head;
        let tempIndex = 0;

        while (node != null) {
            if (index == tempIndex) {
                return node.value
            }
            tempIndex++
            node = node.next;
        }

        return -1

    }

    print() {
        let node = this.head
        while (node != null) {
            console.log(node.value);
            node = node.next;
        }
    }

    addAtHead(val: number): void {
        const newNode = new LinkedListNode(val)
        newNode.next = this.head;
        this.head = newNode;
    }

    addAtTail(val: number): void {
        let node = this.head;

        let newNode = new LinkedListNode(val)

        if (!node) {
            this.head = newNode
        }
        while (node != null) {
            if (node.next == null) {
                node.next = newNode
                return;
            }
            node = node.next;
        }
    }

    addAtIndex(index: number, val: number): void {

        let tempIndex = 0;
        const newNode = new LinkedListNode(val)
        let node = this.head;
        let prev: LinkedListNode;

        if (!this.head && index == 0) {
            this.addAtHead(val)
            return
        }

        while (tempIndex <= index) {

            if (!node && prev) {
                prev.next = newNode
                break
            }

            if (!node) {
                break
            }

            if (tempIndex == index) {

                const tempCurrent = node

                if (prev == null) {
                    newNode.next = node;
                    this.head = newNode;
                    return;
                } else {
                    prev.next = newNode;
                    newNode.next = tempCurrent;
                    return;
                }

            }

            tempIndex++
            prev = node;
            node = node.next
        }
    }

    deleteAtIndex(index: number): void {
        let tempIndex = 0;
        let node = this.head;
        let prev: LinkedListNode;

        while (tempIndex <= index && node) {
            if (tempIndex == index) {

                if (prev) {
                    prev.next = node.next
                } else {
                    this.head = node.next
                }
                break
            }

            prev = node;
            node = node.next;
            tempIndex++
        }
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