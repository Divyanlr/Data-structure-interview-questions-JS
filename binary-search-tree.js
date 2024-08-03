// insertion O(log n)
// delete O(log n)
// this is an avg case not every time we get O(n log n) 
// if we have a tree like a list (3-->17-->30-->100-->200-->280-->400-->900) searching will be O(n)
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root == null) {
            return this;
        } else {
            var current = this.root;
            while (true) {
                if(value === current.value) return undefined; // otherwise for value already existing trying to add again will cause infinite loop
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;

                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    search(value) {
        if (this.root == null) return false;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        return false;
    }
    minValue(node) {
        let minv = node.val;
        while (node.left !== null) {
            minv = node.left.val;
            node = node.left;
        }
        return minv;
    }
    remove(val) {
        this.root = this.removeNode(this.root, val);
    }

    removeNode(node, val) {
        if (node === null) {
            return null;
        }
        if (val < node.val) {
            node.left = this.removeNode(node.left, val);
            return node;
        } else if (val > node.val) {
            node.right = this.removeNode(node.right, val);
            return node;
        } else {
            // Node with only one child or no child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            // Node with two children: Get the inorder successor
            node.val = this.minValue(node.right);
            node.right = this.removeNode(node.right, node.val);
            return node;
        }
    }
}
var tree = new BinarySearchTree();
tree.root = new Node(10);