const findHighestProduct = (array) => {
  // input: an array of at least length 3
  // output: max product (number)
  // edge cases: if some numbers are negative, how to handle 0s
  // constraints: none;

  }



  // // brute force
  // let maxProduct = -Infinity;

  // for (let i = 0; i < array.length; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     for (let k = j + 1; k < array.length; k++) {
  //       let newProduct = array[i] * array[j] * array[k];
  //       maxProduct = newProduct > maxProduct ? newProduct : maxProduct;
  //     }
  //   }
  // }

  // return maxProduct;
// }

console.log(findHighestProduct([1, 2, 3])); // 6
console.log(findHighestProduct([5, 8, 2, 63, -100, -100, 5])); // 63,000 
console.log(findHighestProduct([5, 9, 2, 1])); // 90  