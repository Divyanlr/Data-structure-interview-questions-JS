// DFS -not a tree graph
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    // Add a node to the graph
    addNode(node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }
    // Add an edge between two nodes (undirected)
    addEdge(node1, node2) {
        this.adjacencyList.get(node1).push(node2);
        this.adjacencyList.get(node2).push(node1);
    }
    // Remove an edge between two nodes (undirected)
    removeEdge(node1, node2) {
        let index = this.adjacencyList.get(node1).indexOf(node2);
        if (index !== -1) { this.adjacencyList.get(node1).splice(index, 1); }

        index = this.adjacencyList.get(node2).indexOf(node1);
        if (index !== -1) { this.adjacencyList.get(node2).splice(index, 1); }
    }
    // Remove a node and all associated edges
    removeNode(node) {
        const neighbors = this.adjacencyList.get(node);
        if (neighbors) {
            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i];
                this.removeEdge(node, neighbor);
            }
        }
        this.adjacencyList.delete(node);
    }
    // Print the graph
    display() {
        for (let [node, edges] of this.adjacencyList.entries()) {
            console.log(`${node}: ${edges.join(', ')}`);
        }
    }
    // Depth-First Search (DFS)
    dfs(start) {
        const visited = new Set();
        this._dfsHelper(start, visited);
    }

    _dfsHelper(node, visited) {
        if (!node) return;
        visited.add(node);
        console.log(node);

        const neighbors = this.adjacencyList.get(node);
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.has(neighbors[i])) {
                this._dfsHelper(neighbors[i], visited);
            }
        }
    }
    // Breadth-First Search (BFS)
    bfs(start) {
        const visited = new Set();
        const queue = [start];

        visited.add(start);

        while (queue.length > 0) {
            const node = queue.shift();
            console.log(node);

            const neighbors = this.adjacencyList.get(node);
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited.has(neighbors[i])) {
                    visited.add(neighbors[i]);
                    queue.push(neighbors[i]);
                }
            }
        }
    }
}

// usage

// Create an instance of the graph
const graph = new Graph();

// Define airports (nodes)
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// Define routes (edges)
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
    ['LAP', 'PHX'], // Adding LAP connection for completeness
    ['LAP', 'MEX']  // Adding LAP connection for completeness
];

// Add nodes to the graph
for (let i = 0; i < airports.length; i++) {
    graph.addNode(airports[i]);
}

// Add edges to the graph
for (let i = 0; i < routes.length; i++) {
    graph.addEdge(routes[i][0], routes[i][1]);
}

// Display the graph
console.log("Graph:");
graph.display();

// Perform DFS starting from 'PHX'
console.log("\nDFS starting from PHX:");
graph.dfs('PHX');

// Graph:
//     - adjacencyList: A map where each key is a node and the value is a list of its neighbors

// Methods:
//     - addNode(node)
//     - addEdge(node1, node2)
//     - removeEdge(node1, node2)
//     - removeNode(node)
//     - display()
//     - dfs(start)

// Function addNode(node):
//     if node not in adjacencyList:
//         adjacencyList[node] = []

// Function addEdge(node1, node2):
//     if node1 in adjacencyList and node2 in adjacencyList:
//         adjacencyList[node1].append(node2)
//         adjacencyList[node2].append(node1)

// Function removeEdge(node1, node2):
//     if node1 in adjacencyList and node2 in adjacencyList:
//         if node2 in adjacencyList[node1]:
//             adjacencyList[node1].remove(node2)
//         if node1 in adjacencyList[node2]:
//             adjacencyList[node2].remove(node1)

// Function removeNode(node):
//     if node in adjacencyList:
//         for neighbor in adjacencyList[node]:
//             removeEdge(node, neighbor)
//         delete adjacencyList[node]

// Function display():
//     for each node in adjacencyList:
//         print node, adjacencyList[node]

// Function dfs(start):
//     visited = Set()

//     Function dfsHelper(node):
//         if node is NULL:
//             return
//         visited.add(node)
//         print node
//         for each neighbor in adjacencyList[node]:
//             if neighbor not in visited:
//                 dfsHelper(neighbor)

//     dfsHelper(start)
