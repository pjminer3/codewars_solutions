/* In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck! */

function solve(arr){
  let sorted = arr.sort((a, b) => b - a)
  let result = [];
  while (sorted.length !== 0) {
    if (sorted.length > 1) {
      result = result.concat([sorted[0], sorted[sorted.length - 1]]);
      sorted = sorted.slice(1, sorted.length - 1);
    } else {
      result.push(sorted[0]);
      sorted = [];
    }
  }

  return result;
};

console.log(solve([15,11,10,7,12]))// = [15,7,12,10,11]