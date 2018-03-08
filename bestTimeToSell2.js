/* Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/ 

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  // Inputs: array of prices
  // outputs: a number (max profit)
  // edge cases: stock drops all day long, do you have to sell at the end of the day

  let min = null;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    let cur = prices[i];
    let next = prices[i + 1];

    if (typeof min === 'number' && (!next || next < cur)) {
      profit += (cur - min);
      min = null;
    } else if ( typeof min !== 'number' && (next > cur)) {
      min = cur;
    }
  }
  
  return profit;
};

console.log(maxProfit([8, 9, 2, 7, 5, 6, 4])); // 7 
console.log(maxProfit([])); // 0
console.log(maxProfit([9, 7, 5, 3, 1])); // 0