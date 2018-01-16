/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/


// BRUTE FORCE SOLUTION;
// Time complexity: O(n^2)
// Space complexity: O(1)
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (i !== j) {
              if (nums[i] + nums[j] === target) {
                  return [i, j];
              }
          }
      }
  }
};

// HASH SOLUTION
// Time complexity: 0(n);
// Space complexity: 0(n);
var twoSum = function(nums, target) {
  // create a hash to store key/value paris
  const hash = {};
  
  // assign each key/value pair to the hash
  for (let i = 0; i < nums.length; i++) {
      let otherNumber = target - nums[i];
      if (hash[otherNumber] >= 0 && hash[otherNumber] !== i) {
          return [i, hash[otherNumber]];
      }
      
      // assign k/v pairs to hash, with the value of the element being the key of the k/v pair
      hash[nums[i]] = i;
  }
};