const makeWords = (number, mapping) => {
  if (number === '') return [''];
  
  // const numbersArr = number.split('');
  const result = [];
  // const currentNumber = number.slice(0, 1);
  
  for (let i = 1; i <= number.length; i++) {
    const currentNumber = number.substring(0, i);
    if (mapping[currentNumber]) {
      const currentLetters = mapping[currentNumber];
      currentLetters.forEach( letter => {
        makeWords(number.substring(i), mapping).forEach( word => {
          result.push(letter + word);
        });
      });
    }
  }


  return result;
};

const map1 = {
  1: ['a', 'b'],
  2: ['c', 'd'],
  12: ['e', 'f']
}

console.log(makeWords('12', map1)); // ['ac', 'ad', bc, bd, e, f];
console.log(makeWords('21', map1)); // [ca, cb, da, db];
console.log(makeWords('122', map1)); // [aac, aad, abc, abd, bac, bad, bbc, bbd, ec, ed, fc, fd]