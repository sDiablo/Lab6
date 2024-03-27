const fs = require('fs');

function readGraphFromFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1, m + 1).map(line => line.split(' ').map(Number));

  return { n, m, edges };
}

function generateAdjacencyMatrix(n, edges) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  for (const [v, u] of edges) {
    matrix[v - 1][u - 1] = 1; 
    matrix[u - 1][v - 1] = 1; 
  }
  return matrix;
}

function generateIncidenceMatrix(vertices, edgesCount, edges) {
  const incidenceMatrix = [];

  for (let i = 0; i < edgesCount; i++) {
    incidenceMatrix.push(new Array(vertices).fill(0));
  }

  for (let i = 0; i < edgesCount; i++) {
    const [vertex1, vertex2] = edges[i];
    incidenceMatrix[i][vertex1 - 1] = 1;
    incidenceMatrix[i][vertex2 - 1] = -1;
  }

  return incidenceMatrix;
}

function printMatrix(matrix) {
  matrix.forEach(row => console.log(row.join(' ')));
}

function saveMatrixToFile(matrix, filePath) {
  const content = matrix.map(row => row.join(' ')).join('\n');
  fs.writeFileSync(filePath, content, 'utf8');
}

function main() {
  const filePath = 'input.txt';
  const { n, m, edges } = readGraphFromFile(filePath);

  const adjacencyMatrix = generateAdjacencyMatrix(n, edges);
  console.log('Матриця суміжності:');
  printMatrix(adjacencyMatrix);
  saveMatrixToFile(adjacencyMatrix, 'adjacencyMatrix.txt'); 

  const incidenceMatrix = generateIncidenceMatrix(n, m, edges);
  console.log('Матриця інцидентності:');
  printMatrix(incidenceMatrix);
  saveMatrixToFile(incidenceMatrix, 'incidenceMatrix.txt');
}

main();

module.exports = { generateIncidenceMatrix };