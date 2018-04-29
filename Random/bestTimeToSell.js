/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = prices[1] - prices[0];
  let smallest = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // check to see if this is a new smallest number
    if (prices[i] < smallest) {
      // if so reassign it as smallest number
      smallest = prices[i];
    } else {
      // else check if it creates a new max profit and if so reset max profit
      profit = Math.max(prices[i] - smallest, profit);
    }
  }

  return profit > 0 ? profit : 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0