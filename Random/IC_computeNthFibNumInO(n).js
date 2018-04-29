// // original solution with poor time/space complexity
// function fib(num) {
//   if (num === 0 || num === 1) return num;

//   return fib(num - 1) + fib(num - 2);
// };

// console.log(fib(0)); // 0
// console.log(fib(1)); // 1
// console.log(fib(2)); // 1
// console.log(fib(3)); // 2
// console.log(fib(4)); // 3


// // Fib(n) creates a binary tree whose height is o(n)

// // imnproved solution memoizing the results
// // offers O(n) time complexity but there is room to improve space complexity

// // class Fibber {
// //   constructor() {
// //     this.memo = {
// //       0: 0,
// //       1: 1,
// //     };
// //   }

// //   fib(num) {
// //     if (num < 0) {
// //       throw new Error('Number must be positive')
// //     }

// //     if (this.memo.hasOwnProperty(num)) {
// //       return this.memo[num];
// //     }

// //     let result = this.fib(num - 1) + this.fib(num - 2);

// //     this.memo[num] = result; 

// //     return result;
// //   }
// // }

// // const flib = new Fibber;




// function fib(num) {
//   // edge case for is num is negative
//   if (num < 0) throw new Error('Number must be positive');

//   // 0 and 1 edge cases
//   if (num === 0 || num === 1) return num;
  
//   // build it from the bottom up
//   let prev = 1;
//   let prevPrev = 0;
//   let current;

//   for (let i = 1; i < num; i++) {
//     current = prev + prevPrev;
//     prevPrev = prev;
//     prev = current;
//   }

//   return current;
// }




// solve for fib sequence with O(1) space complexity and O(n) time complexity
// then try solving it with matrix multiplication and bring time cost down even further to O(lg n)

function fib() {

}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3