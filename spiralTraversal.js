/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

 const spiralTraversal = (matrix) => {
  let firstArr = 0;
  let smallIdx = 0;
  let largIdx = matrix.length - 1;
  let lastArr = matrix.length - 1;
  const result = [];

  while (firstArr <= lastArr) {
    // conßsole.log('We inside while')
    // first action: move right across first row
    for (let i = smallIdx; i <= largIdx; i++) {
      let char = matrix[firstArr][i];
      if (typeof char === 'number') {
        result.push(char);
      }
    }
    firstArr++;

    // sectond action: move down across all rows at largIdx
    for (let i = firstArr; i <= lastArr; i++) {
      let char = matrix[i][largIdx];
      if (typeof char === 'number') {
        result.push(char);
      }
    }
    largIdx--;

    // third action: move left across last row
    for (let i = largIdx; i >= smallIdx; i--) {
      let char = matrix[lastArr][i];
      if (typeof char === 'number') {
        result.push(char);
      }
    }
    lastArr--;

    // fourth action: move up across all rows at smallIdx
    for (let i = lastArr; i >= firstArr; i--) {
      let char = matrix[i][smallIdx];
      if (typeof char === 'number') {
        result.push(char);
      }
    }
    smallIdx++;
  }

  return result;
 };


 console.log(spiralTraversal([[1,2,3], [4,5,6], [7,8,9]])); // [1,2,3,6,9,8,7,4,5];
 console.log(spiralTraversal([[1,2], [3,4]])); // [1,2,4,3]
