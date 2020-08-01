"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _createGraph = function _createGraph(vertices, edges) {
  // The graph
  var adjacencyList = new Map();

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
  edges.forEach(function (route) {
    return addEdge.apply(undefined, _toConsumableArray(route));
  });

  return adjacencyList;
};

// Getting all the searching methods into one object
var graph = {
  createGraph: function createGraph(vertices, edges) {
    return _createGraph(vertices, edges);
  }
};

// Export searching object
exports.default = graph;