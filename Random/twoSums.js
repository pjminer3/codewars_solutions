// given an array and a integer, return a boolean if any two numbers in the array an be summed to equal the integer
// optmize for run time and not memory

// time complexity: O(n) space complexity: O(n);
const twoSums = (arr, int) => {
    // brute force: iterate through every pair of possible combinations and see we can find a pair that works
    // O(n^2)

    const numbers = new Set();

    for (let i = 0; i < arr.length; i++) {
        let remainder = int - arr[i];
        if (numbers.has(remainder)) return true;
        numbers.add(arr[i]);
    }

    return false;
};


console.log(twoSums([1, 5, 7, 3, 23, 6, 07, 45, 757], 29)); // true
console.log(twoSums([1, 5, 7, 3, 23, 6, 07, 45, 757], 758)); // true
console.log(twoSums([1, 5, 7, 3, 23, 6, 07, 45, 757], 759)); // false
console.log(twoSums([2, 1, 4], 4)); //false