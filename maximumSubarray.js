/* Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let maxNum = null;
  let newIteration = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum || maxNum === null) { maxNum = nums[i]; }
    for (let j = i + 1; j < nums.length; j++) {
      if (j === i + 1) {
        newIteration = nums[i] + nums[j];
      } else {
        newIteration += nums[j];
      }

      if (newIteration > maxNum) {
        maxNum = newIteration;
      }
    }
  }

  return maxNum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [4, -1, 2, 1]
// console.log(findBiggestCombo([-2, 1, -3, 4, -1, 2, 1, -5, 4], 4)); // [4, -1, 2, 1]



