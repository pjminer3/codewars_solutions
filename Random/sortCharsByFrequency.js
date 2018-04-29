/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  // create counter object
  const counter = {};
  for (let i = 0; i < s.length; i++) {
    counter[s[i]] = counter[s[i]] + 1 || 1;
  }

  // create an array of 2 element touples: the letter and its count
  const letters = Object.keys(counter);
  const counts = Object.values(counter);
  let touples = [];

  letters.forEach((letter, idx) => {
    touples.push([letter, counts[idx]]);
  });

  // sort array by count
  touples = touples.sort((a, b) => {
    return b[1] - a[1];
  });

  // reconstruct string by adding the each letter by its count to it
  let string = '';
  touples.forEach((touple) => {
    let count = 0;
    while (count < touple[1]) {
      string += touple[0];
      count ++;
    }
  });


  // return string
  return string;
};

console.log(frequencySort('tree')) // 'eert' or 'eetr'
console.log(frequencySort('Aabb')); // 'bbAa' or 'bbaA' 
console.log(frequencySort('cccaaa')); // cccaaa