// function changePossibilitiesTopDown(amount, coins) {
//   // base cases
//   const memo = {};
//   function internalCheck (amount, coins, index = 0){

//     if (amount === 0) {
//       // memo[`(${amount}, ${index})`] = 1;
//       return 1;
//     }
//     if (amount < 0) {
//       // memo[`(${amount}, ${index})`] = 0;
//       return 0;
//     }
//     if (index === coins.length) {
//       // memo[`(${amount}, ${index})`] = 0;
//       return 0;
//     }

//     console.log(`Trying to make ${amount} with ${coins.slice(index)}`);

//     const currentCoin = coins[index];
//     let posibilities = 0;

//     while (amount >= 0) {
//       // check to see if its in memo
//       if (!memo.hasOwnProperty(`(${amount}, ${index})`)) {
//         memo[`(${amount}, ${index})`] = internalCheck(amount, coins, index + 1);
//       }

//       posibilities += memo[`(${amount}, ${index})`];
//       amount -= currentCoin;
//     }


//     // console.log(memo);
//     return posibilities;
//   }


//   return internalCheck(amount, coins)
// }



// Bottom-Up Approach
function changePossibilitiesTopDown(amount, coins) {
  // The index represents the total amount we're trying to get, and the value of the index
  // represents the number of ways possible to get it

  // create the initial array of possibilities
  const waysOfDoingNCents = Array(amount + 1).fill(0);
  // add the number of ways to get 0 (zero ways)
  waysOfDoingNCents[0] = 1;

  // do a forEach over all the coins;
  coins.forEach(coin => {
    // for each coin iterate through the array of values (starting at the value of the coin)
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      // subtract the coins value from the index and assign it to variable higherAmountRemainder
      let higherAmountRemainder = higherAmount - coin;
      // add to the array[higherAmount] += array[higherAmountRemainder];
      waysOfDoingNCents[higherAmount] += waysOfDoingNCents[higherAmountRemainder];
    }
  });

  return waysOfDoingNCents[amount];
}



console.log(changePossibilitiesTopDown(2, [1, 2])); // 2
console.log(changePossibilitiesTopDown(4, [1, 2, 3])); // 4