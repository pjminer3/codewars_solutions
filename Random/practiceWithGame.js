// edge types can be: flat (null), hole (0), tab (1)

const solveJigsaw = pieces => {
  const result = [];
  let currentRow = [];
  
  const corners = [];
  const sides = [];
  const middle = [];

  pieces.forEach( piece => {
    let count = 0;
    for (edge in piece.edges) {
      if (piece.edges[edge].type === null) count++
    }

    switch (count) {
      case 0:
        middle.push(piece);
        break;
      case 1:
        sides.push(piece);
        break;
      case 2:
        corners.push(piece);
        break;
    }
  });

  currentRow.push(makeTopLeftCorner(corners[0]));




};

function makeTopLeftCorner(piece) {
  if (piece.edges.left === null && piece.edges.top === null) {
    return piece;
  } else {
    piece.rotateClockwise();
    return makeTopLeftCorner(piece);
  }
} 

function makeTopRow(currentRow, sidePieces) {
  
}

function edgesMatch(edge1, edge2) {
  if (edge1.type === null || edge2.type === null) {
    return false;
  }
  
  return (edge1.type === !edge2.type || edge1.number === edge2.number);
}

class Piece {
  constructor(value, leftEdge, topEdge, rightEdge, bottomEdge) {
    this.value = value;
    this.edges = {
      left: leftEdge,
      top: topEdge,
      right: rightEdge,
      bottom: bottomEdge
    }
  }

  rotateClockwise() {
    const oldLeft = this.edges.left;
    this.edges.left = this.edges.bottom;
    this.edges.bottom = this.edges.right;
    this.edges.right = this.edges.top;
    this.edges.top = oldLeft;
  }
}

class Edge {
  constructor(type, number) {
    this.type = type;
    this.number = number;
  }
}

const gamePieces = [];

gamePieces.push(
  new Piece(2, new Edge(0, 2), new Edge(null, null), new Edge(1, 3), new Edge(0, 16)),
  new Piece(3, new Edge(0, 3), new Edge(null, null), new Edge(1, 4), new Edge(0, 17)),
  new Piece(4, new Edge(0, 4), new Edge(null, null), new Edge(null, null), new Edge(1, 5)),
  new Piece(6, new Edge(1, 11), new Edge(1, 16), new Edge(0, 12), new Edge(1, 15)),
  new Piece(7, new Edge(1, 12), new Edge(1, 17), new Edge(0, 13), new Edge(0, 14)),
  new Piece(8, new Edge(1, 13), new Edge(0, 5), new Edge(null, null), new Edge(1, 6)),
  new Piece(10, new Edge(1, 9), new Edge(0, 15), new Edge(0, 8), new Edge(null, null)),
  new Piece(11, new Edge(1, 8), new Edge(1, 14), new Edge(0, 7), new Edge(null, null)),
  new Piece(12, new Edge(1, 7), new Edge(0, 6), new Edge(null, null), new Edge(null, null)),
  new Piece(9, new Edge(null, null), new Edge(1, 10), new Edge(0, 9), new Edge(null, null)),
  new Piece(5, new Edge(null, null), new Edge(1, 1), new Edge(0, 11), new Edge(0, 10)),
  new Piece(1, new Edge(null, null), new Edge(null, null), new Edge(1, 2), new Edge(0, 1)), 
);

console.log(gamePieces[0]);

