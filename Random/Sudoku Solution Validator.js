/*###Sudoku Background Sudoku is a game played on a 9x9 grid. The goal of the game is 
to fill all cells of the grid with digits from 1 to 9, so that each column, 
each row, and each of the nine 3x3 sub-grids (also known as blocks) contain 
all of the digits from 1 to 9. 
(More info at: http://en.wikipedia.org/wiki/Sudoku)

###Sudoku Solution Validator Write a function validSolution that accepts a 2D array 
representing a Sudoku board, and returns true if it is a valid solution, or 
false otherwise. The cells of the sudoku board may also contain 0's, which 
will represent empty cells. Boards containing one or more zeroes are considered 
to be invalid solutions.

###Examples: validSolution([
 [5, 3, 4, 6, 7, 8, 9, 1, 2], 
 [6, 7, 2, 1, 9, 5, 3, 4, 8],
 [1, 9, 8, 3, 4, 2, 5, 6, 7], 
 [8, 5, 9, 7, 6, 1, 4, 2, 3], 
 [4, 2, 6, 8, 5, 3, 7, 9, 1], 
 [7, 1, 3, 9, 2, 4, 8, 5, 6], 
 [9, 6, 1, 5, 3, 7, 2, 8, 4], 
 [2, 8, 7, 4, 1, 9, 6, 3, 5], 
 [3, 4, 5, 2, 8, 6, 1, 7, 9]])

//Example 1 should return true */

function validSolution(board){
  // Test to ensure there are no 0
  if ([].concat.apply([],board).includes(0)) {
    return false;
  }
  
  // Test to ensure all rows contain 1-9
  for (var i = 0; i < board.length; i++) {
    if (!(board[i].includes(1) && board[i].includes(2) && board[i].includes(3) && board[i].includes(4) && board[i].includes(5) && board[i].includes(6) && board[i].includes(7) && board[i].includes(8) && board[i].includes(9))) {
      return false;
    }
  }
  
  // Test to ensure all columns contain 1-9
  var columns = [];
  var column = [];
  for (var index = 0; index < board.length; index++) {
    for (var row = 0; row < board.length; row++) {
      column.push(board[row][index]);
    }
    columns.push(column);
    column = [];
  }
  for (var i = 0; i < columns.length; i++) {
    if (!(columns[i].includes(1) && columns[i].includes(2) && columns[i].includes(3) && columns[i].includes(4) && columns[i].includes(5) && columns[i].includes(6) && columns[i].includes(7) && columns[i].includes(8) && columns[i].includes(9))) {
      return false;
    }
  }
  
  // Test to ensure all 3x3 boxes contain 1-9
  var boxes = [];
  var box = [];
  
    // Code to generate 3 left-most boxes
  for (var row = 0; row < 9; row++) {
    for (var index = 0; index < 3; index ++) {
      box.push(board[row][index]);
    }
    if (box.length === 9) {
      boxes.push([].concat.apply([], box));
      box = [];
    }
  }
  
    // Code to generate 3 middle boxes
  for (var row = 0; row < 9; row++) {
    for (var index = 3; index < 6; index ++) {
      box.push(board[row][index]);
    }
    if (box.length === 9) {
      boxes.push([].concat.apply([], box));
      box = [];
    }
  }
  
    // Code to generate 3 right-most boxex
  for (var row = 0; row < 9; row++) {
    for (var index = 6; index < 9; index ++) {
      box.push(board[row][index]);
    }
    if (box.length === 9) {
      boxes.push([].concat.apply([], box));
      box = [];
    }
  }
  
  for (var i = 0; i < boxes.length; i++) {
    if (!(boxes[i].includes(1) && boxes[i].includes(2) && boxes[i].includes(3) && boxes[i].includes(4) && boxes[i].includes(5) && boxes[i].includes(6) && boxes[i].includes(7) && boxes[i].includes(8) && boxes[i].includes(9))) {
      return false;
    }
  }

  return true;
}