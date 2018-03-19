function getMaxProfit(prices) {
  // keep track of: minimum price, maximumProfit
  let minPrice = prices[0];
  let maxProfit = prices[1] - minPrice;

  // iterate through all numbers
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minPrice < 0) {
      minPrice = prices[i]
    }

    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};

console.log(getMaxProfit([10, 7, 5, 8, 11, 9])); // 6



