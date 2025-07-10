class AdjacencyMatrix {
  constructor() {
    this.adjacencyMatrix = [];
    this.vertices = new Map();
  }

  addVertex(vertex) {
    // add solution here
    if (this.vertices.has(vertex)) return;

    // The values of the keys in vertices are the indeces where the given vertices are found in adjacencyMatrix
    this.vertices.set(vertex, this.vertices.size);
    this.expandMatrix();
  }

  expandMatrix() {
    for (let i = 0; i < this.adjacencyMatrix.length; i++) {
      this.adjacencyMatrix[i].push(0);
    }
    this.adjacencyMatrix.push(
      new Array(this.adjacencyMatrix.length + 1).fill(0)
    );
  }

  addEdge(vertex1, vertex2, weight = 1) {
    // add solution
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) return;

    // Get the indeces
    const index1 = this.vertices.get(vertex1);
    const index2 = this.vertices.get(vertex2);

    this.adjacencyMatrix[index1][index2] = weight;
    this.adjacencyMatrix[index2][index1] = weight;
  }

  hasEdge(vertex1, vertex2) {
    // add solution
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2))
      return false;

    const index1 = this.vertices.get(vertex1);
    const index2 = this.vertices.get(vertex2);

    return this.adjacencyMatrix[index1][index2] !== 0;
  }

  getEdgeWeight(vertex1, vertex2) {
    // add solution
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) return 0;

    const index1 = this.vertices.get(vertex1);
    const index2 = this.vertices.get(vertex2);

    return this.adjacencyMatrix[index1][index2];
  }
}

module.exports = AdjacencyMatrix;
