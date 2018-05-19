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
  if (str1.length === str2.length) {
    return changeChar(str1, str2);
  } else if (str1.length === str2.length + 1) {
    return addChar(str2, str1);
  } else if (str2.length === str1.length + 1) {
    return addChar(str1, str2);
  }

  return false;
};

function changeChar(str1, str2) {
  let foundFirstDif = false;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (foundFirstDif) return false;
      foundFirstDif = true;
    }
  }

  return true;
};

function addChar(smallStr, largeStr) {
  let idxSmall = idxLarge = 0;
  let foundFirstDif = false;

  while (idxSmall < smallStr.length || idxLarge < largeStr.length) {
    if (smallStr[idxSmall] !== largeStr[idxLarge]) {
      if (foundFirstDif) return false;
      idxLarge++;
      foundFirstDif = true;
    } else {
      idxSmall++;
      idxLarge++;
    }
  }

  return true;
};

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('ple', 'pale')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'pales')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('bale', 'pale')); // true
console.log(oneAway('pale', 'bake')); // false
console.log(oneAway('bake', 'pale')); // false
