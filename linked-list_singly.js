// Insertion O(1)
// Removal depends: if beginning O(1) -- best case or remove at end O(n)
// Search O(n)
// Access O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Remove from end
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Remove from beginning
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead; // old head
    }

    // Add new value at the beginning
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Retrieve a node by its position in the list
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // Change the value of a node at a given position
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // Insert a new node at a given position
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val); // Cast to boolean
        if (index === 0) return !!this.unshift(val); // Cast to boolean

        var newNode = new Node(val);
        var pre = this.get(index - 1);
        var temp = pre.next;
        pre.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // Remove a node at a given position
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        var pre = this.get(index - 1);
        var removed = pre.next;
        pre.next = removed.next;
        this.length--;
        return removed;
    }

    // Reverse the linked list
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next;
        var pre = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        return this;
    }
    rotate() {
        if (!this.head || !this.head.next) return; // If the list is empty or has only one node, no need to rotate

        let oldHead = this.head;
        this.head = oldHead.next;
        this.tail.next = oldHead;
        this.tail = oldHead;
        this.tail.next = null;
    }
}

var list = new SinglyLinkedList();
list.push("hello");
