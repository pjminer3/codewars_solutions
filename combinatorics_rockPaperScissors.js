// the lecture from Leo about combinatorics

const CHOICES = ['R', 'P', 'S'];

const rockPaperScissors = (rounds) => {
  const noOfCombinations = CHOICES.length ** rounds;

  const results = [];
  for (let i = 0; i < noOfCombinations; i++) {
    results.push([]);
  }

  for (let i = 0; i < noOfCombinations; i++) {
    for (let j = 0; j < noOfCombinations; j++) {
      results[i][j] = magicFormula(i, j, rounds);
    }
  }

  return results;
}

const magicFormula = (row, col, rounds) => {
  return Math.floor(row / (CHOICES.length ** (rounds - 1 - col))) % CHOICES.length;
}

console.log(rockPaperScissors(3)[0]);
console.log(rockPaperScissors(3)[1]); 