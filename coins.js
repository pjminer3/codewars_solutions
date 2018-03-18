function changePossibilitiesTopDown(amount, coins) {
  // base cases
  const memo = {};
  function internalCheck (amount, coins, index = 0){

    if (amount === 0) {
      // memo[`(${amount}, ${index})`] = 1;
      return 1;
    }
    if (amount < 0) {
      // memo[`(${amount}, ${index})`] = 0;
      return 0;
    }
    if (index === coins.length) {
      // memo[`(${amount}, ${index})`] = 0;
      return 0;
    }

    console.log(`Trying to make ${amount} with ${coins.slice(index)}`);

    const currentCoin = coins[index];
    let posibilities = 0;

    while (amount >= 0) {
      // check to see if its in memo
      if (!memo.hasOwnProperty(`(${amount}, ${index})`)) {
        memo[`(${amount}, ${index})`] = internalCheck(amount, coins, index + 1);
      }

      posibilities += memo[`(${amount}, ${index})`];
      amount -= currentCoin;
    }


    // console.log(memo);
    return posibilities;
  }


  return internalCheck(amount, coins)
}



// console.log(changePossibilitiesTopDown(2, [1, 2])); // 2
console.log(changePossibilitiesTopDown(14, [1, 2, 3])); // 4