// Greed is Good

// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450



function score( dice ) {
  // Define result, counter hash, points for tripples/singles
  var result = 0;
  var counter = {};
  var tripples = {
    1: 1000,
    6: 600,
    5: 500,
    4: 400,
    3: 300,
    2: 200,
  };
  var singles = {
    1: 100,
    5: 50
  };
  
  // Create counter object
  dice.forEach(function(number) {
    counter[number] = counter[number] + 1 || 1;
  });
  
  // Add up points for tripples
  for (var number in counter) {
    if (counter[number] > 2) {
      result += tripples[number];
      counter[number] = counter[number] - 3;
    }
  }
  
  // Add points for singles
  for (var number in counter) {
    if (number === '1') {
      result += counter[number] * 100;
    } else if (number === '5') {
      result += counter[number] * 50;
    }
  }
  
  // Return result
  return result;
}