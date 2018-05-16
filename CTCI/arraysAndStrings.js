/**
 * Arrays and Strings Chapter
 */

 // 1.3 UrlIfy
 const palindromePermutation = (str) => {
  str = str.toLowerCase();
  const counts = str.split('').reduce((obj, letter) => {
    if (letter === ' ') return obj;
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
    return obj;
  }, {});

  let odds = 0;

  for (letter in counts) {
    if (counts[letter] % 2 !== 0) {
      odds++;
      if (odds > 1) { 
        return false;
      }
    }
  }

  return true;
 };

//  console.log(palindromePermutation('Tact Coa')); // true

//1.4 One Away
const oneAway = (str1, str2) => {

};

console.log(oneAwy('pale', 'ple')); // true
console.log(oneAwy('pale', 'ple')); // true
console.log(oneAwy('pale', 'ple')); // true
console.log(oneAwy('pale', 'ple')); // false