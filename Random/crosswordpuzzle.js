const checkAround = (board, word, row, col) => {
  if (word.length === 0) return true;

  let currentLetter = board[row][col];
  let nextLetter = word[0];
  let top, left, bottom, right;

  board[row][col] = 0;
  

  // check top
  if (board[row - 1] && board[row - 1][col] === nextLetter) {
   top = checkAround(board, word.substring(1), row - 1, col);
  }

  if (top) return true;

  // check left
  if (board[row][col - 1] && board[row][col - 1] === nextLetter) {
    left = checkAround(board, word.substring(1), row, col - 1);
  }

  if (left) return true;
  
  // check bottom
  if (board[row + 1] && board[row + 1][col] === nextLetter) {
    bottom = checkAround(board, word.substring(1), row + 1, col);
  }

  if (bottom) return true;

  // check right
  if (board[row][col + 1] && board[row][col + 1] === nextLetter) {
    right = checkAround(board, word.substring(1), row, col + 1);
  }

  if (right) return true;

  board[row][col] = currentLetter;
};

const exist = (board, word) => {
  let wordFound = false;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        if (wordFound) return true;
        wordFound = checkAround(board, word.substring(1), row, col);
      }
    }
  }

  return wordFound;
};

let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
]

let board2 = [
  ["C","A","A"],
  ["A","A","A"],
  ["B","C","D"]
]

console.log(exist(board, 'ABCCED')); // TRUE
console.log(exist(board, 'SEE')); // TRUE
console.log(exist(board, 'ABCB')); // false
console.log(exist(board2, 'AAB')); // true