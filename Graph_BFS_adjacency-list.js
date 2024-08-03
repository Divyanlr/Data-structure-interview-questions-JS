function bfsAdjList(graph, start) {
    let visited = new Array(graph.length).fill(false);
    let queue = [start];
    let result = [];
    
    visited[start] = true;
    
    while (queue.length > 0) {
        let vertex = queue.shift();
        result.push(vertex);
        
        for (let neighbor of graph[vertex]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    
    return result;
}

// Example usage
let graph = [
    [1, 2],
    [0, 3, 4],
    [0, 4],
    [1, 4],
    [1, 2, 3]
];
console.log(bfsAdjList(graph, 0)); // Output: [0, 1, 2, 3, 4]
