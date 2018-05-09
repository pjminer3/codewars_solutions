const division = (divisor, dividend) => {
  let count = 0;
  let step = 1;

  while (true) {
    while (divisor - (dividend * step) >= 0 ) {
      divisor = divisor - (dividend * step);
      count += step;
    }
    if (divisor === 0) return count
    step = step * 0.5;
  }
};

console.log(division(4, 2)); // 2
console.log(division(5, 2)); // 2.5
console.log(division(6, 3)); // 2 
console.log(division(9, 3)); // 3 
console.log(division(5, 4)); // 1.25
console.log(division(70, 8)); // 8.75
