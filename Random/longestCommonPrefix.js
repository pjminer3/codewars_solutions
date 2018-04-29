/*

Write a function to find the longest common prefix string amongst an array of strings.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let longestPrefix = null;
  if (strs.length === 0) {
    return '';
  }

  for (let i = 0; i < strs.length; i++) {
    // console.log(longestPrefix);
    let currentWord = strs[i];
    // sets the first word as the longest prefix
    if (!longestPrefix && longestPrefix !== '') {
      longestPrefix = currentWord;
      // console.log('This is the first word: ', longestPrefix);
      continue;
    } 

    // iterate through each letter of the prefix
    for (let j = 0; j < longestPrefix.length; j++) {
      // check if the letter is the same in the word being checked
      if (longestPrefix[j] === currentWord[j]) {
        // if they are the same, continue
        continue;
      } else if (!currentWord[j]) {
        longestPrefix = currentWord;
      } else {
        // if it is NOT, reset longestPrefix to all the letters checked in the current word
        longestPrefix = currentWord.substring(0, j);
      }
    }
  }
  return longestPrefix;
};

console.log((longestCommonPrefix(['hello', 'hellll', 'hel']))); // hel 
console.log((longestCommonPrefix(['hello', 'hellll', 'hel', 'ha']))); // h
console.log((longestCommonPrefix(['smile', 'aids']))); // '' 
console.log((longestCommonPrefix(['hellothere']))); // hellothere