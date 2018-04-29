function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((s, n) => n + s) + arr2.reduce((s, n) => n + s);
}