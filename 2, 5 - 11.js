const getProductsOfAllIntsExceptAtIndex = (arr) => {
  const products = Array(arr.length).fill(1);

  let runningLeft = 1;
  let runningRight = 1;

  for (let i = 1; i < arr.length; i++) {
      runningLeft *= arr[i - 1];
      products[i] = products[i] * runningLeft;
  }

  for (let j = arr.length - 2; j >= 0; j--) {
      runningRight *= arr[j + 1];
      products[j] = products[j] * runningRight;
  }

  return products;
};




console.log('getProductsOfAllIntsExceptAtIndex works: ', JSON.stringify(getProductsOfAllIntsExceptAtIndex([4, 5, 2, 1, 3])) === JSON.stringify([30, 24, 60, 120, 40])); 