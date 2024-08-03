
// A priority queue is an abstract data type similar to a regular queue, but with an additional constraint that each element has a priority associated with it. 
// Elements with higher priority are served before elements with lower priority. 
//insertion O(log n)
//removal O(log n)
//search O(n)
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    // Enqueue a new element with a priority
    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    // Bubble up the newly inserted element to maintain the heap property
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element.priority >= parent.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    // Dequeue the element with the highest priority (lowest priority number)
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }
    // Sink down the root element to maintain the heap property
    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue("common cold", 5);
pq.enqueue("gunshot wound", 1);
pq.enqueue("high fever", 4);
pq.enqueue("broken arm", 2);
pq.enqueue("glass in foot", 3);

console.log(pq.dequeue()); // Node { value: 'gunshot wound', priority: 1 }
console.log(pq.dequeue()); // Node { value: 'broken arm', priority: 2 }
console.log(pq.dequeue()); // Node { value: 'glass in foot', priority: 3 }
console.log(pq.dequeue()); // Node { value: 'high fever', priority: 4 }
console.log(pq.dequeue()); // Node { value: 'common cold', priority: 5 }
