// brute force approach uses (effectively) 2 loops to solve the problem
// const productExceptIndex = (array) => {
//   if (!array) return 'There needs to be an input array';
  
//   const res = [];

//   for (let i = 0; i < array.length; i++) {
//     res.push(array.reduce((total, number, idx) => {
//       if (idx === i) return total;

//       return total * number;
//     }, 1))
//   }

//   return res;
// }

// O(n) time and O(n) space
const productExceptIndex = (array) => {
  if (!array || array.length < 2)  return 'Must have an array with length > 1';

  const result = Array(array.length).fill(1);

  let currProductToLeft = 1;
  let currProductToRight = 1;

  let j = array.length - 1; // set starting point for getting product traversing the array in reverse

  for (let i = 0; i < array.length; i++) {
    result[i] = currProductToLeft * result[i]; // because multiplying by 1 is the same as having no effect (undefined/non-existent)
    result[j] = currProductToRight * result[j];

    currProductToLeft *= array[i];
    currProductToRight *= array[j];

    j--;
  }

  return result;
}

console.log(productExceptIndex([])); // must provide an array with 2 or more numbers
console.log(productExceptIndex()); // Must provide array with two or more numbers 
console.log(productExceptIndex([1, 7, 3, 4])); // [84, 12, 28, 21] 
console.log(productExceptIndex([1, 0, 3, 4])); // [0, 12, 0, 0] 
console.log(productExceptIndex([1, 2, 6, 5, 9])); // [540, 270, 90, 108, 60]