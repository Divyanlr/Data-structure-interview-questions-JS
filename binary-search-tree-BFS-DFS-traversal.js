//         10
//    6          15
// 3    8    13     20 
// BFS --[10,6,15,3,8,13,20]
// DFS_preOrder --[10,6,3,8,15,13,20]  DFS_postOrder--[3,8,6,13,20,15,10]  DFS_inOrder--[3,6,8,10,13,15,20]
// time complexity of both DFS&BFS same  , space complexity is diff--> BFS is less space if it's linear long
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
    // Breadth First Traversal
    BFS() {
        const queue = [];
        const result = [];
        let node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    }
    // Depth First Traversal - In-Order
    DFS_inOrder() {
        const result = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            result.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    // Depth First Traversal - Pre-Order
    DFS_preOrder() {
        const result = [];
        function traverse(node) {
            result.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    // Depth First Traversal - Post-Order
    DFS_postOrder() {
        const result = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.val);
        }
        traverse(this.root);
        return result;
    }
}
