/* The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {

  const results = {
    1: '1',
    2: '11', 
    3: '21',
    4: '1211',
    5: '111221'
  }

  if (results[n]) {
    return results[n];
  }

  let result = results[5];

  n = n - 5;

  while (n > 0) {
    result = getNextNum(result);
    n -= 1;
  }

  return result;
  
};

const getNextNum = (string) => {
  let str = string;
  let result = '';

  // create a while loop that while length of string is > 0
  while (str.length > 0) {
    // get the first number (num)
    let num = str[0];
    // set i = 0;
    let i = 0;
    // while  str[i] === number
    while (str[i] === num) {
      // add 1 to i (shows how much of the number there are in a row)
      i++;
    }
    // add (i+1).toStr() to result;
    result += (i).toString();
    // add num to result
    result += num;
    // set str to str.slice(i);
    str = str.slice(i);
  }
    return result;
}

console.log(countAndSay(6)); // '312211;