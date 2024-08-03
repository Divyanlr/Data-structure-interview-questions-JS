class Graph {
    constructor() {
        this.nodes = new Set();
        this.adjacencyList = new Map();
    }

    addNode(node) {
        this.nodes.add(node);
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    }

    addEdge(node1, node2, weight) {
        if (!this.adjacencyList.has(node1)) {
            this.addNode(node1);
        }
        if (!this.adjacencyList.has(node2)) {
            this.addNode(node2);
        }
        this.adjacencyList.get(node1).push({ node: node2, weight: weight });
        this.adjacencyList.get(node2).push({ node: node1, weight: weight }); // For undirected graph
    }

    displayGraph() {
        const container = document.getElementById('graph-container');
        container.innerHTML = '';

        const nodeElements = {};
        this.nodes.forEach(node => {
            const nodeElem = document.createElement('div');
            nodeElem.className = 'node';
            nodeElem.innerText = node;
            container.appendChild(nodeElem);
            nodeElements[node] = nodeElem;
        });

        this.nodes.forEach(node => {
            this.adjacencyList.get(node).forEach(neighbor => {
                if (node < neighbor.node) { // To avoid drawing the same edge twice
                    this.drawEdge(nodeElements[node], nodeElements[neighbor.node], neighbor.weight);
                }
            });
        });
    }

    drawEdge(nodeElem1, nodeElem2, weight) {
        const container = document.getElementById('graph-container');
        const edgeElem = document.createElement('div');
        edgeElem.className = 'edge';

        const rect1 = nodeElem1.getBoundingClientRect();
        const rect2 = nodeElem2.getBoundingClientRect();

        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;

        const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

        edgeElem.style.width = `${length}px`;
        edgeElem.style.transform = `rotate(${angle}deg)`;
        edgeElem.style.transformOrigin = '0 0';
        edgeElem.style.left = `${x1}px`;
        edgeElem.style.top = `${y1}px`;

        container.appendChild(edgeElem);

        const weightElem = document.createElement('div');
        weightElem.style.position = 'absolute';
        weightElem.style.left = `${(x1 + x2) / 2}px`;
        weightElem.style.top = `${(y1 + y2) / 2}px`;
        weightElem.style.backgroundColor = '#fff';
        weightElem.style.padding = '2px 5px';
        weightElem.innerText = weight;

        container.appendChild(weightElem);
    }
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 5);
graph.addEdge('B', 'D', 10);
graph.addEdge('C', 'D', 3);

graph.displayGraph();