/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

const makeBoard = (rows, cols) => {
  let board = [];

  for (let row = 0; row < rows; row++) {
    board.push([]);
  }
  
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < cols; col++) {
      board[row].push(1);
    }
  }

  return board;
}

const robotPaths = (row, col, board, position = [0, 0]) => {
  
  board = board || makeBoard(row, col);
  let paths = 0;
  const [curRow, curCol] = position;
  if (curRow < 0 || curCol < 0 || curRow === row || curCol === col) return 0;
  const location = board[curRow][curCol];

  if (!location) {
    return 0;
  } else if (curRow === row - 1 && curCol === col - 1) {
    return 1;
  }

  board[curRow][curCol] = 0;
  // test above, left, right, and below
  paths += robotPaths(row, col, board, [curRow - 1, curCol]);
  paths += robotPaths(row, col, board, [curRow, curCol - 1]);
  paths += robotPaths(row, col, board, [curRow + 1, curCol]);
  paths += robotPaths(row, col, board, [curRow, curCol + 1]);

  board[curRow][curCol] = 1;

  return paths;
}

// console.log(robotPaths(1, 1)); // 1
console.log(robotPaths(2, 2)); // 2
console.log(robotPaths(1, 2)); // 1
console.log(robotPaths(2, 1)); // 1
console.log(robotPaths(3, 3)); // 1
console.log(robotPaths(5, 5)); // 8512
console.log(robotPaths(6, 6)); // 1262816

