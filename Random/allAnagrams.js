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

var allAnagrams = function(string) {
    if (string.length === 1) {
        return [string];
    }

  const result = {};

  string.split('').forEach((letter, idx) => {
    let remainingLetters = string.slice(0, idx) + string.slice(idx + 1);

    allAnagrams(remainingLetters).forEach(word => {
        result[letter + word] = true;
    });
  });

  return Object.keys(result);
};

console.log(allAnagrams('abc'));

