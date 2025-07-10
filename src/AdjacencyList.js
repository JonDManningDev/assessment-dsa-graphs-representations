class AdjacencyList {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // add solution here
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return;
  }

  addEdge(vertex1, vertex2) {
    // add solution here
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
    return;
  }

  hasEdge(vertex1, vertex2) {
    // add solution here
    return (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex1].includes(vertex2)
    );
  }

  getNeighbors(vertex) {
    // add solution here
    return this.adjacencyList[vertex] || [];
  }
}

module.exports = AdjacencyList;
