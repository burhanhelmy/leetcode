class LLNode {
    value: number;
    next: LLNode;
    constructor(value) {
        this.value = value
    }
}

export class LinkedList {
    static createFromArray(list: number[]) {

        let headRef;
        let nodePointer;

        for (let i = 0; i < list.length; i++) {
            const newNode = new LLNode(list[i])
            if (i == 0) {
                headRef = newNode
                nodePointer = headRef
            } else {
                nodePointer.next = newNode
                nodePointer = nodePointer.next;
            }
        }
        return headRef;
    }

    static print(head: LLNode) {
        if (head == null) {
            return
        }
        console.log(head.value)
        this.print(head.next)
    }

    static reverse(head: LLNode) {
        let nodePointer = head;
        let prev: LLNode;

        while (nodePointer != null) {
            let next = nodePointer.next;
            nodePointer.next = prev;
            prev = nodePointer
            nodePointer = next;
        }
        return prev
    }
}

// null -> 1 -> 2 -> 3 -> null