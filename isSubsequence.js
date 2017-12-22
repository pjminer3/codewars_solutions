/*
Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let result = '';
  let desiredIdx = 0;
  let lastSearchedIdx = 0;


  // while t.length > result.length
  while (s.length > result.length) {
    // If we've searched all letters and haven't created a result as big as the desired string, return false
    if (lastSearchedIdx === t.length) {
      return false;
    }
    // loop through each letter of s checking it against the desired index of t
    for (let i = lastSearchedIdx; i < t.length; i++) {
      // if you find a match:
      if (s[desiredIdx] === t[i]) {
        // add the letter to a result string
        result += t[i];
        // keep index of letter as lastSearchIdx
        lastSearchedIdx = i + 1;
        // incremend desired idx ++
        desiredIdx += 1;
        // break out of loop
        break;
      }
      lastSearchedIdx = i + 1;
    }
  }
  // if you break out of the loop, return result === t
  return result === s;

};

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
