/* A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 // not optimized solution
// var uniquePaths = function(m, n) {
//   if (m === 0 || n === 0) return 0;
//   // build the board of false values
//   const board = makeBoard(m, n);

//   function findPaths(board, i, j) {
//     if (i === m - 1 && j === n - 1) return 1; // if it's at the end of the matrix
//     if (i >= m || j >= n) return 0; // if it goes out of bounds
//     if (board[i][j] === true) return 0;  // if it goes on a piece that's already been visited
  
//     board[i][j] = true;
  
//     let result = 0;
//     result += findPaths(board, i + 1, j); // moves a row down
//     result += findPaths(board, i, j + 1); // moves a column right
  
//     board[i][j] = false;
//     return result;
//   }

//   return findPaths(board, 0, 0);
  
// };

// OPTIMIZED SOLUTION
// var uniquePaths = function(m, n) {
//   if (m === 0 || n === 0) return 0;
//   // build the board of false values
//   const board = makeBoard(m, n);

//   function findPaths(board, i, j) {
//     if (m === 1 && n === 1) return 1;
//     if (i === m - 1) return 1; // if current space is one to the left of final space
//     if (j === n - 1) return 1; // if current space is one above the final space


//     result = 0
//     // check the space to the right before moving (m = m)
//     if (j !== n - 1) {
//       result += findPaths(board, i, j + 1);
//     }
//     if (i !== m - 1) {
//       result += findPaths(board, i + 1, j);
//     }

//     return result;
//   }

//   return findPaths(board, 0, 0);
  
// };

// function makeBoard(m, n) {
//   const board = Array(m);
//   for (let i = 0; i < board.length; i++) {
//     board[i] = Array(n).fill(false);
//   }
//   return board;
// }

function uniquePaths(n, m) {
  if (n === 1 || m === 1) return 1;
  // make board;
  const board = makeBoard(n, m);
  // get the whole top row to be ones
  board[0] = board[0].map(space => 1);

  // get the whole left column to be ones
  for (let i = 0; i < board.length; i++) {
    board[i][0] = 1;
  };

  // go through each row adding the elements from the previous row and to the left
  // iterate through each row starting at row 2 (idx = 1)
  for (let i = 1; i < board.length; i++) {
    // iterate through each index
    for (let j = 1; j < board[i].length; j++) {
      // set value of index equal to the previous element and the same element of the previous row
      board[i][j] = board[i][j - 1] + board[i - 1][j];
    }
  }

  return board[n - 1][m - 1];
}

function makeBoard(n, m) {
  let board = Array(n).fill([]);
  return board.map(space => {
    return Array(m).fill(0);
  });
}




// console.log(uniquePaths(1, 5)); // 1
// console.log(uniquePaths(2, 2)); // 2
// console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(6, 6)); // 256
