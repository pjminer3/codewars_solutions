/*
    Suppose we had an array of n integers sorted in ascending order. How quickly could we check if a given integer is in the array?
*/

const findIntegerInArray = (array, int) => {
    // set starting index
    let start = -1;
    // set ending index
    let end = array.length;
    // create while loop (while start !== end)
    while (start + 1 !== end) {
        // find the index in the middle of the two (round down)
        let middle = Math.floor((end + start) / 2);
        // check the value at the index of the array compared to the value we're looking for
        if (array[middle] === int) {
            // if the value is what we're looking for return true
            return true;
        } else if (array[middle] < int) {
            // if value we look for is more, reassign starting index 
            start = middle;
        } else {
            // if value we look for is less, reassign ending index
            end = middle;
        }
    } 
    // return false;
    return false;
};

console.log(findIntegerInArray([1, 2, 3, 4, 5, 6], 5)); // true; 
console.log(findIntegerInArray([1, 2, 3, 4, 5, 6], 7)); // false;
console.log(findIntegerInArray([1, 2, 3, 4, 5, 6], 0)); // false;
console.log(findIntegerInArray([1, 4, 26, 27, 84, 90], 1)); // true;
console.log(findIntegerInArray([1, 4, 26, 27, 84, 90], 90)); // true;