const removeDubs = (nums) => {
  let noDupes = 0;
  let general = 0;

  while (general < nums.length) {
    if (nums[general] !== nums[general - 1]) {
      nums[noDupes] = nums[general];
      noDupes++;
    }
    general++;
  }

  for (let i = 0; i < general - noDupes; i++) {
    nums.pop();
  }

  return nums.length;
}

console.log(removeDubs([])); // [];
console.log(removeDubs([1, 2, 3, 4, 4, 5, 6])); // [1, 2, 3, 4, 5, 6];
console.log(removeDubs([1, 1, 1, 1])); // [1]
console.log(removeDubs([1, 1, 2, 2, 3])); // [1, 1, 2, 2, 3]; // [1, 2, 3];
console.log(removeDubs([1, 1, 2])); // [1, 2]
