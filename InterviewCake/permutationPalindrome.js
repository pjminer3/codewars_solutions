/**
 * A function that retuns whether or not a string has a permutation that is a palindrome
 * 
 * @param {string} str A string made up entirely of lowercase characters 
 */

const permutationPalindrome = str => {
  const letters = new Set();

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letters.has(letter)) {
      letters.delete(letter);
    } else {
      letters.add(letter);
    }
  };

  return letters.size < 2;
}

console.log(permutationPalindrome('civic')); // true
console.log(permutationPalindrome('ivicc')); // true
console.log(permutationPalindrome('civil')); // false
console.log(permutationPalindrome('livci')); // false