function validateBrackets(string) {
  if (!string || string.length % 2) return false;

  const brackets = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  const result = [];

  for (let i = 0; i < string.length; i++) {
    // check to make sure first bracket never a closer
    if (brackets[result[0]]) return false;

    let currBracket = string[i];

    // if the current bracket is an opening bracket
    if (!brackets[currBracket])
      result.push(currBracket);
    // if the closing bracket does not match
    else if (result[result.length - 1] !== brackets[currBracket]) 
      return false;
    // it's a closing bracket and it does match
    else 
      result.pop();
  }

  return result.length === 0;
};

console.log(validateBrackets('{[]()}')); // true
console.log(validateBrackets('{[(])}')); // false
console.log(validateBrackets("{[}")); // false