/**

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

const processSpace = (arr, row, col, result) => {
  result.push(arr[row][col]);
  arr[row][col] = undefined;
};

const spiralOrder = arr => {
  if (arr.length === 0 || arr[0].length === 0) {
    return [];
  }

  const result = [];
  let rowStart = 0;
  let rowEnd = arr.length - 1;
  let colStart = 0;
  let colEnd = arr[0].length - 1;
  
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      result.push(arr[rowStart][i]);
    }
    rowStart++;

    for (let j = rowStart; j <= rowEnd; j++) {
      result.push(arr[j][colEnd]);
    }
    colEnd--;

    if (rowStart <= rowEnd && colStart <= colEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(arr[rowEnd][i]);
      }
      rowEnd--;
    }

    if (rowStart <= rowEnd && colStart <= colEnd) {
      for (let j = rowEnd; j >= rowStart; j--) {
        result.push(arr[j][colStart]);
      }
      colStart++;
    }
  }

  return result;
};

const input1 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ];

 const input2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

console.log(spiralOrder(input1)); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder(input2)); // [1,2,3,4,8,12,11,10,9,5,6,7]