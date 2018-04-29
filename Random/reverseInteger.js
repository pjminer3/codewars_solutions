/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

// ARRAY REVERSAL
const reverse = function(x) {
  let neg = false;
  if (x < 0) {
    neg = true;
  }
  // convert x to a string
  let str = x.toString();
  if (neg) {
    // remove the negative symbol (-)
    str = str.substring(1);
  }
  // reverse the string
  str = str.split('').reverse().join('');
  // convert string to a number
  str = +str;
  if (neg) {
    // make the number negative again
    str = -str
  }
  // return it
    if (str > 2147483647 || str < -2147483647) {
        return 0;
    } else {
        return str;
    }
};

// MATH
const reverse2 = (x) => {
  
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21

console.log(reverse2(123)); // 321
console.log(reverse2(-123)); // -321
console.log(reverse2(120)); // 21