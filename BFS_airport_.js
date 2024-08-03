// Airport Connectivity using Breadth-First Search (BFS)
// it suitable for finding the shortest path in an unweighted graph.
//Shortest Path: Finding the shortest path between two airports in terms of the number of connections.
// Level Order Traversal: Exploring all airports within a certain number of connections.
function airportConnectivityBFS(network, startAirport, targetAirport) {
  const visited = new Set();
  const queue = [[startAirport, 0]]; // [airport, steps]

  while (queue.length > 0) {
    const [currentAirport, steps] = queue.shift();

    if (currentAirport === targetAirport) {
      return steps; // Return the minimum number of steps
    }

    visited.add(currentAirport);

    for (const neighborAirport of network[currentAirport]) {
      if (!visited.has(neighborAirport)) {
        queue.push([neighborAirport, steps + 1]);
        visited.add(neighborAirport);
      }
    }
  }

  return -1; // No connectivity found
}

// Airport Connectivity using Depth-First Search (DFS)
//DFS explores as far as possible along each branch before backtracking, making it suitable for exploring all possible paths.
//Path Finding: Exploring all possible routes between airports.
// Connectivity and Components: Finding connected components in a graph.
// Cycle Detection: Detecting cycles in the graph.
function airportConnectivityDFS(network, startAirport, targetAirport) {
  const visited = new Set();

  function dfs(airport, steps) {
    if (airport === targetAirport) {
      return steps; // Return the number of steps or the path
    }

    visited.add(airport);

    for (const neighborAirport of network[airport]) {
      if (!visited.has(neighborAirport)) {
        const result = dfs(neighborAirport, steps + 1);
        if (result !== -1) {
          return result;
        }
      }
    }

    return -1; // No connectivity found
  }

  return dfs(startAirport, 0);
}

// Example usage:
const airportNetwork = {
  'A': ['B', 'C'],
  'B': ['C', 'D'],
  'C': ['D', 'E'],
  'D': ['E'],
  'E': ['F'],
  'F': []
};

const startAirport = 'A';
const targetAirport = 'F';

console.log(airportConnectivityBFS(airportNetwork, startAirport, targetAirport));
console.log(airportConnectivityDFS(airportNetwork, startAirport, targetAirport));


// Conclusion
// For airport connectivity:

// If you need to find the shortest route between airports (in terms of the number of connections), BFS is typically the better choice.
// If you need to explore all possible routes or find all connected components, DFS may be more appropriate.