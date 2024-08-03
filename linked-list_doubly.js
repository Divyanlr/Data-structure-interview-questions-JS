//insertion o(1)
//removal o(1)
//search o(n) -- actually it's o(N/2)
// access o(n)

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //remove from end
    pop(){
        if(!this.head) return undefined;
        var popNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = popNode.prev;
            this.tail.next = null;
            popNode.prev = null;
        }
        this.length--;
        return popNode;
    }
    //remove from beginning
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    //remove from beginning and add new val there 
    //( q.unshift('a')  q.unshift('b')  q.unshift('c') --> ['c','b','a'])
    unshift(val) {
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head =  newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index.length < 0 || index >= this.length) return null;
        if(index <= this.length/2){
            var count = 0;
            var current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        } else{
            var count = this.length-1;
            var current = this.tail;
            while(count != index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length ) return false;
        if(index === 0 ) return this.unshift(val);
        if(index === this.length) return this.push(val);
        var beforeNode = this.get(index-1); 
        var newNode = new Node(val);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;  newNode.prev = beforeNode;
        newNode.next = afterNode;   afterNode.prev = newNode;
        this.length++;
        return true                                                         
    }
    remove(index, val){
        if(index < 0 || index > this.length ) return undefined;
        if(index === 0 ) return this.unshift(val);
        if(index === this.length-1) return this.pop(val);
        var removedNode = this.get(index); 
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
    reverse() {
        var current = this.head;
        var temp = null;

        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp !== null) {
            this.tail = this.head;
            this.head = temp.prev;
        }

        return this;
    }
}
