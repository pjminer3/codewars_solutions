/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const options = {
    '}':'{',
    ']':'[',
    ')':'('
  };

  let newStr = []

  // iterate through each char in the string
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // check to see if the character is in options
    if (options[char]) {
      // if in options check to make sure it's value equals the last element of newStr
      if (options[char] === newStr[newStr.length - 1]) {
        // if it does, pop off the last element and continue to next letter 
        newStr.pop();
        continue;
      }
      // if it doesn't, return false
      return false;
    } else {
      // push character to end of nwStr
      newStr.push(char);
    }
  }

  return newStr.length === 0;
};

console.log(isValid('()')) // true
console.log(isValid('(({}))[()]')) // true
console.log(isValid('()[]{}{{()}}')) // true
console.log(isValid('(')) // false
console.log(isValid('([][][[])')) // false