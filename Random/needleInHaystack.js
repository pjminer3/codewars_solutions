/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  let length = needle.length;

  if (length === 0) { return 0; }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, length) === needle) {
      return i;
    }
  }
  
  return -1;
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaaaa', 'baa')); // -1
console.log(strStr('a', 'a')); // 0