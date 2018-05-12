/**
 * 
 * Assumptions: only text in str will be openers and closers, string can be empty (which returns true), 
 * 
 * @param {string}  str  A string of openers "(, [, {" and closers "), ], }"
 */

const validator = str => {
  const openersStack = [];
  const closers = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (closers[char]) {
      const opener = openersStack.pop();
      if (opener !== closers[char]) return false;
    } else {
      openersStack.push(char);
    }
  }
  return true;
}

console.log(validator('{[]()}')); // true
console.log(validator('{[(])}')); // false
console.log(validator('{[}')); // false

