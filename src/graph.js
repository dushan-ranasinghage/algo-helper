"use strict";

let createGraph = (vertices, edges) => {
  // The graph
  const adjacencyList = new Map();

  // Add node
  function addNode(vertice) {
    adjacencyList.set(vertice, []);
  }

  // Add edge, undirected
  function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
  }

  // Create the Graph
  vertices.forEach(addNode);
  edges.forEach((route) => addEdge(...route));

  return adjacencyList
};

// Getting all the searching methods into one object
const graph = {
  createGraph: function (vertices, edges) {
    return createGraph(vertices, edges);
  },
};

// Export searching object
export default graph;
