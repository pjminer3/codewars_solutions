const isUnique = (str) => {
  const hash = new Object();

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (hash[letter]) {
      return false;
    }

    hash[letter] = true;
  }

  return true;
};

console.log(isUnique('jj')); // false
console.log(isUnique('')); // true
console.log(isUnique('jab')); // true
