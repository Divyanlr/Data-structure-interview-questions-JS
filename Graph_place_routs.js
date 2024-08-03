//  every tree is a graph but every graph is not a tree.
// two approach for graph --> adjacency list & adjacency Matrix
// matrix take more VideoColorSpace, slower to iterate through all edges, fast to look up specific ede
// list less space needs , faster to iterate through all edges, can be slower to look up specific ede
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' '); 
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

// the graph
const adjacencyList = new Map();
// add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}
// add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}
// creating graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList);
