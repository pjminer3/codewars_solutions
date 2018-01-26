/*

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total = 0;

  // iterate through each letter
  for (let i = 0; i < s.length; i++) {
    // (compare the values of the letter your on and the next letter)
    let current = s[i];
    let next = s[i + 1];
    // if there is no next letter OR the current letter is larger than the next letter
    if (!next || numerals[current] >= numerals[next]) {
      // add the value of the current letter to the total
      total += numerals[current];
    } else if (numerals[next] > numerals[current]) {
    // if the second letter is larger than the first 
      // subtract the value of the first from the second and add it to total
      total += numerals[next] - numerals[current];
      // increment the counter by 1 (so total increments by 2 before next rotation)
      i += 1;
    }
  }

  return total;
};

console.log(romanToInt('X')); // 10
console.log(romanToInt('XCIX')); // 99 
console.log(romanToInt('CCLXXIII')); // 273 
console.log(romanToInt('MMMCMXCIX')); // 3999 
console.log(romanToInt('MMDL')); // 2550 
