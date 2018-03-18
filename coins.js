function changePossibilitiesTopDown(amount, coins, index = 0) {
  // base cases
  if (amount === 0) return 1;
  if (amount < 0) return 0;
  if (index === coins.length) return 0;

  const currentCoin = coins[index];
  let posibilities = 0;

  while (amount >= 0) {
    posibilities += changePossibilitiesTopDown(amount, coins, index + 1);
    amount -= currentCoin;
  }

  return posibilities;
}



// console.log(changePossibilitiesTopDown(2, [1, 2])); // 2
console.log(changePossibilitiesTopDown(4, [1, 2, 3])); // 4