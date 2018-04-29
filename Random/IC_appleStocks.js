/*  
var stockPricesYesterday = [10, 7, 5, 8, 11, 9]
 getMaxProfit(stockPricesYesterday); // 6 (buying for 5 selling for 11)
*/

/*
I: an array of numbers
O: a number representing the max profit
C: Must buy before selling and cannot buy/sell in the same minute
E: empty array
*/

// //  O(n^2) time complexity, O(1) space complexity
// function getMaxProfit(array) {
//   let maxProfit = undefined;

//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       let roundProfit = array[j] - array[i];
//       if (!maxProfit || roundProfit > maxProfit) {
//         maxProfit = roundProfit;
//       }
//     }
//   }

//   return maxProfit
// };

function getMaxProfit(array) {
  if (array.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices')
  }
  let maxProfit = array[1] - array[0];
  let lowestPrice = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] - lowestPrice > maxProfit) {
      maxProfit = array[i] - lowestPrice;
    } 
    if (array[i] < lowestPrice){
      lowestPrice = array[i];
    }
  }

  return maxProfit;
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 2, 9, 5])); // 7
console.log(getMaxProfit([0, -2])); // -2
let aids = null;
