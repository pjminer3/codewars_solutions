const bubbleSort = (arr) => {
  for (let k = 1; k < arr.length; k++) {
    let arrayIsSorted = true;
    for (let i = 0; i < arr.length - k; i++) {
      if (nextIdxIsSmaller(arr[i], arr[i + 1])) {
        arr = swapValuesAndReturnArray(i, arr);
        arrayIsSorted = false;
      }
    }
    if (arrayIsSorted) break;
  }
  return arr;
};

function swapValuesAndReturnArray(i, arr) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  return arr;
}

function nextIdxIsSmaller(val1, val2) {
  return val1 > val2;
}

console.log(bubbleSort([4, 6, 234, 6, 7, 8, 2])); // [2, 4, 6, 6, 7, 8, 234]
console.log(bubbleSort([5, 23, 1, 634, 23, 2])); // [1, 2, 5, 23, 23, 634]