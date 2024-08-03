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
        if (index !== -1) {  this.adjacencyList.get(node1).splice(index, 1); }

        index = this.adjacencyList.get(node2).indexOf(node1);
        if (index !== -1) {  this.adjacencyList.get(node2).splice(index, 1); }
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
}
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
airports.forEach(airport => graph.addNode(airport));
// Add edges to the graph
routes.forEach(route => graph.addEdge(...route));
// Display the graph
graph.display();
