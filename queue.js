// FIFO
// insertion o(1)
//deletion o(1)
//search o(n)
// access (n)
//if we prioritize searching we should not use queue, only for making queue faster this will help
//for complicated algo
class Node {
    constructor(value) {
        this.value = null;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
            this.first = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}