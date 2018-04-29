/*

Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};



// const removeDuplicates = function(nums) {
//   let prevNum = undefined;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== prevNum) {
//       prevNum = nums[i];
//     } else {
//       nums.splice(i, 1);
//       i = i - 1;
//     }
//   }

//   return nums.length;
// };

console.log(removeDuplicates([1,2,2])); // [1,2]
console.log(removeDuplicates([1,1,2])); // [1,2]