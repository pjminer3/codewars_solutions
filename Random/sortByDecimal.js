const sortByDecimal = (arr) => {
  return arr.sort((a, b) => {
    return (a % 1) - (b % 1);
  });
};

const arr = [1.1, 2.01, -5.05, 3.3, 94023.001]; // [94023.001, 2.01, -5.05, 1.1, 3.3];

console.log(sortByDecimal(arr));