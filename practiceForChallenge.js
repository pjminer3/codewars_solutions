/*

You are given an integer N, followed by N lines of input
(1 <= N <= 100). Each line of input contains one or
several words separated with singles spaces. Each word is a
sequence of letters of English alphabet containing between
1 and 10 characters, inclusive. The total number of words
in the input is between 1 and 100, inclusive.

Your task is to reverse the order of words in each line of input,
while preserving the words themselves. The lines of
your output should not have any trailing or leading spaces.
Example:

**output**
world Hello
world Bye
world Useless

*/

const input1 = "3\nHello world\nBye world\nUseless world"

const reverseWords = (string) => {
  const lines = parseLines(string);
  const newLines = reverseAllLines(lines.slice(1)).join('\n');
  return newLines;
};

function reverseAllLines (arr) {
  return arr.map(sentence => reverseString(sentence));
}

function reverseString (string) {
  return string = string.split(' ').reverse().join(' ');
}

function parseLines (input) {
  return input.split('\n');
}

console.log(reverseWords(input1)); // world Hello > word Bye > world Useless


const input2 = "1\n2\n3";
const input3 = '1\n2\n4';

const fibs = {};

const fibNumber = (string) => {
  generateFibs(9);
  return fibs[string.split('\n')[2]];
};

function generateFibs (num) {
  if (fibs[num]) return fibs[num];
  
  if (num <= 1) {
    return fibs[num] = 1;
  } else {
    return fibs[num] = generateFibs(num - 1) + generateFibs(num - 2);
  }
}


console.log(fibNumber(input2)); // 3
console.log(fibNumber(input3)); // 5




