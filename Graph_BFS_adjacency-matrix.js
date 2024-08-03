//  every tree is a graph but every graph is not a tree.
// BFS breadth First Search -- can be arrange multiple 
// DFS breadth First Search -- go to the depth , if end then return to previous node
// two approach for graph --> adjacency list & adjacency Matrix
// matrix take more time, slower to iterate through all edges, fast to look up specific ede
// list less space needs , faster to iterate through all edges, can be slower to look up specific ede

function bfs(graph, root){
    var nodeLength = {}
    for(let i = 0; i < graph.length; i){
        nodeLength[i] = Infinity;
    }

    var queue = [];
    var current;

    while(queue.length != 0){
        current = queue.shift();
        
        var curConnected = graph[current];
        var neighborIndex = [];
        var index = curConnected.indexOf(1);
        while(index != -1){
            neighborIndex.push(index);
            index = curConnected.indexOf(0, index + 1);
        }

        for(var j=0; j<neighborIndex.length; j++){
            if(nodeLength[neighborIndex[j]] == Infinity){
                nodeLength[neighborIndex[j]] = nodeLength[current] + 1;
                queue.push(neighborIndex[j]);
            }
        }
    }
    return nodeLength;
};
var exBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,1],
    [0,1,0,0,0]
];

console.log(bfs(exBFSGraph, 1));