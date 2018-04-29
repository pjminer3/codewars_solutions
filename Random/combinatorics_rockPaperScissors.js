// the lecture from Leo about combinatorics

const CHOICES = ['R', 'P', 'S'];

const rockPaperScissors = (rounds) => {
  const noOfCombinations = CHOICES.length ** rounds;

  const results = [];
  for (let i = 0; i < noOfCombinations; i++) {
    results.push([]);
  }

  for (let i = 0; i < noOfCombinations; i++) {
    for (let j = 0; j < rounds; j++) {
      results[i][j] = CHOICES[magicFormula(i, j)];
    }
  }

  return results;
}

const magicFormula = (row, col, rounds) => {
  return Math.floor(row / (CHOICES.length ** col)) % CHOICES.length;
}

console.log(rockPaperScissors(3)[0]);
console.log(rockPaperScissors(3)[1]); 
console.log(rockPaperScissors(3)[2]); 
console.log(rockPaperScissors(3)[3]); 
console.log(rockPaperScissors(3)[4]);
console.log(rockPaperScissors(3)[5]);
console.log(rockPaperScissors(3)[6]);
console.log(rockPaperScissors(3)[7]);
console.log(rockPaperScissors(3)[8]);
console.log(rockPaperScissors(3)[9]);
console.log(rockPaperScissors(3)[10]);
console.log(rockPaperScissors(3)[11]);
console.log(rockPaperScissors(3)[12]);
console.log(rockPaperScissors(3)[13]);
console.log(rockPaperScissors(3)[14]);
console.log(rockPaperScissors(3)[15]);
console.log(rockPaperScissors(3)[16]);
console.log(rockPaperScissors(3)[17]);
console.log(rockPaperScissors(3)[18]);
console.log(rockPaperScissors(3)[19]);
console.log(rockPaperScissors(3)[20]);
console.log(rockPaperScissors(3)[21]);
console.log(rockPaperScissors(3)[22]);
console.log(rockPaperScissors(3)[23]);
console.log(rockPaperScissors(3)[24]);
console.log(rockPaperScissors(3)[25]);
console.log(rockPaperScissors(3)[26]);
