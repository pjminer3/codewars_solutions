/* Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.

*/ 

// ORIGINAL SOLUTION - BAD
// time complexity: O(n);
// space complexity: O(1);
const productOfThree = (arr) => {
  // GREEDY SOLUTION

  // keep track of the largestCombo3, largestCombo2, largestNumber
  // keep track of smallestCombo2, smallestNumber
  let largestCombo2 = smallestCombo2 = arr[0] * arr[1];
  let largestNum = Math.max(arr[0], arr[1]);
  let smallestNum = Math. min(arr[0], arr[1]);
  let largestCombo3 = arr[0] * arr[1] * arr[2];

  for (let i = 2; i < arr.length; i++) {
    // check/ update all that we're keeping track of
    largestCombo3 = Math.max(largestCombo2 * arr[i], smallestCombo2 * arr[i], largestCombo3);
    largestCombo2 = Math.max(largestCombo2, largestNum * arr[i], smallestNum * arr[i]);
    largestNum = Math.max(largestNum, arr[i]);
    smallestCombo2 = Math.min(smallestCombo2, largestNum * arr[i], smallestNum * arr[i]);
    smallestNum = Math.min(smallestNum, arr[i]);
  }
  return largestCombo3;
};

console.log(productOfThree([0, 0, 0])); // 0
console.log(productOfThree([5, 2, 7, 9])); // 315
console.log(productOfThree([-14, -10, 12, 10, 15])); // 2100
console.log(productOfThree([-14, -10, 12, 10, 15, -15])); // 3150
console.log(productOfThree([4, 5, 0])); // 0