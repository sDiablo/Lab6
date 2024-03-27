const { generateIncidenceMatrix } = require('./Lab6');

describe('generateIncidenceMatrix', () => {
  it('should generate incidence matrix correctly', () => {
    const vertices = 4;
    const edgesCount = 3;
    const edges = [[1, 2], [2, 3], [3, 4]]; 

    const expectedIncidenceMatrix = [
        [1, -1, 0, 0],
        [0, 1, -1, 0],
        [0, 0, 1, -1]
      ];
      
    const result = generateIncidenceMatrix(vertices, edgesCount, edges);
    expect(result).toEqual(expectedIncidenceMatrix);
  });
});