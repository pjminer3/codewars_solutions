/* Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2. */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// const removeElement = function(nums, val) {
//   for (var j = i = -1; i < nums.length;) {
//     i += 1;
//     j += 1;
      
//     while (nums[i] === val) {
//       i += 1;
//     }

//     if (typeof nums[i] === 'number') { 
//       nums[j] = nums[i]; 
//     }
//   }

//   return j;
// };

// const removeElement = function(nums, val) {
//   let j = 0;

//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }

//   return j;
// };

const removeElement = function(nums, val) {
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1]
      nums.pop();
    } else {
      i++;
    }
  }

  return i;
};

console.log(removeElement([3,2,2,3], 3)); // 2 & [2, 2]
console.log(removeElement([3,2,2,3], 2)); // 2 & [3, 3]
console.log(removeElement([2], 3)); // 1