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
  let max = -Infinity;
  let curr = 0;

  for (let i = 0; i < nums.length; i+=1) {
    curr += nums[i];
    max = Math.max(max, curr);

    // if curr dips below 0, ONLY THEN does it make sense to start over
    // Starting over before reaching a low of 0 leaves some value on the table
    if (curr < 0) {
      curr = 0
    }
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-1, -2, -3])); //-1




