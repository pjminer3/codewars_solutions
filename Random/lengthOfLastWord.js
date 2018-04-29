/* Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  s = s.trim();
  
  let i = 0;
  let x = s.length - 1;

  while (s[x] !== ' ' && x >= 0) {
    x -= 1;
    i += 1;
  }

  return i;
};

console.log(lengthOfLastWord('Hello World')); // 5