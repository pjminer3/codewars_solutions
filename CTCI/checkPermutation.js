const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const obj1 = new Object();
  const obj2 = new Object();

  countLetters(str1, obj1);
  countLetters(str2, obj2);

  for (let key in obj1) {
    if (obj2[key] !== obj1[key]) return false;
  }

  return true;
};

function countLetters(string, obj) {
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    obj[letter] = obj[letter] + 1 || 1;
  }
}

console.log(checkPermutation('ama', 'maa')); // true
console.log(checkPermutation('patrick', 'kcirtapz')); // false
console.log(checkPermutation('mac', 'maz')); // false