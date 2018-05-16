const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const el = arr[mid];
    if (el === val) return mid;
    if (el > val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return null;
};

const arr = [1, 2, 5, 6, 9, 11, 23];


console.log(binarySearch(arr, 1)); // 0
console.log(binarySearch(arr, 23)); // 6
console.log(binarySearch(arr, 5)); // 2
console.log(binarySearch(arr, 3)); // null
console.log(binarySearch(arr, 9)); // 4