/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string, word = '') {
  // base case
  if (string.length === 0) return word;

  string = string.split('');

  let result = [];

  for (let i = 0; i < string.length; i++) {
    // grab the letter we want
    let letter = string[i];
    // add it to the word
    word += letter;
    // 
    result = result.concat(allAnagrams(string.slice(0, i).concat(string.slice(i + 1)).join(''), word));
    word = word.slice(0, word.length - 1);
      // console.log(word);
  }

  return result;
};

console.log(allAnagrams('abc'));

