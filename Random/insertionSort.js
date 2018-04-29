function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    let valueToLeft = arr[i - 1];
    if (valueToLeftIsSmallerOrUndefined(currentValue, valueToLeft)) {
      continue;
    } else {
      arr = insertValueAndUpdateArray(currentValue, i, arr);
    }
  }

  return arr;
};

function insertValueAndUpdateArray(currentValue, currentIndex, array) {
  let valueToLeft = array[currentIndex - 1];
  array[currentIndex] = valueToLeft;
  newIndex = currentIndex - 1;
  if (valueToLeftIsSmallerOrUndefined(currentValue, valueToLeft)){
    array[newIndex] = currentValue;
  } else {
    array = insertValueAndUpdateArray(currentValue, newIndex, array);
  }

  return array;
}

function valueToLeftIsSmallerOrUndefined(currentValue, valueToLeft) {
  return valueToLeft === undefined || valueToLeft <= currentValue;
}


console.log(insertionSort([4, 6, 234, 6, 7, 8, 2])); // [2, 4, 6, 6, 7, 8, 234]
console.log(insertionSort([5, 23, 1, 634, 23, 2])); // [1, 2, 5, 23, 23, 634]