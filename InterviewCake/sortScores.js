// Effectively a counting sort algorithm

const createLookupArray = (scores, maxScore) => {
  const lookup = new Array(maxScore + 1).fill(0);
  
  // count the occurence of each score
  scores.forEach((score, idx) => {
    lookup[score]++;
  });

  // get the cumulative counts of each score
  for (let i = 1; i < lookup.length; i++) {
    lookup[i] = lookup[i] + lookup[i - 1];
  }

  // shift each score one to the right, making 0 = 0
  for (let j = lookup.length - 1; j >= 1; j--) {
    lookup[j] = lookup[j - 1];
  }

  lookup[0] = 0;

  return lookup
}

const sortScores = (scores, maxScore) => {
  const lookup = createLookupArray(scores, maxScore);

  const result = new Array(scores.length);

  scores.forEach( score => {
    const index = lookup[score];
    result[index] = score;
    lookup[score]++;
  });

  return result.reverse();
}

var unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)); // [91, 89, 65, 53, 41, 37];