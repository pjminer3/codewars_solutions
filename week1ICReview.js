function getMaxProfit(prices) {
  // keep track of: minimum price, maximumProfit
  let minPrice = prices[0];
  let maxProfit = prices[1] - minPrice;

  // iterate through all numbers
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minPrice < 0) {
      minPrice = prices[i]
    }

    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};

// console.log(getMaxProfit([10, 7, 5, 8, 11, 9])); // 6



function getproductsOfAllIntsExceptAtIndex(array) {
  // first loop
  const beforeArray = Array(array.length);
  let beforeProduct = 1;
  for (let i = 0; i < array.length; i++) {
    beforeArray[i] = beforeProduct;
    beforeProduct *= array[i];
  }

  let afterProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    beforeArray[i] *= afterProduct;
    afterProduct *= array[i];
  }

  return beforeArray;
};

// console.log(getproductsOfAllIntsExceptAtIndex([1, 7, 3, 4])); // [84, 12, 28, 21]
// console.log(getproductsOfAllIntsExceptAtIndex([1, 5, 6, 9])); // [270, 54, 45, 30]



function maxOf3(array) {
  let max = array[0] * array[1] * array[2];
  let largestCombo = array[0] * array[1];
  let largestNumber = Math.max(array[0], array[1]);
  let smallestCombo = largestCombo;
  let smallestNumber = Math.min(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    let current = array[i];
    max = Math.max(max, largestCombo * current, smallestCombo * current);
    largestCombo = Math.max(largestCombo, largestNumber * current, smallestNumber * current);
    largestNumber = Math.max(largestNumber, current);
    smallestCombo = Math.min(smallestCombo, largestNumber * current, smallestNumber * current);
    smallestNumber = Math.min(smallestNumber, current);
  }

  return max;
}

// console.log(maxOf3([6, 4, 7, -9, 10, -5])); // 450


function mergeRanges(array) {
  const sortedMeetings = array.sort(function(a, b) {
    return a.startTime <= b.startTime ? -1 : 1;
  });

  let startTime = array[0].startTime;
  let endTime = array[0].endTime;
  const meetings = [];
  let runningMeeting = array[0];

  for (let i = 1; i < array.length; i++) {
    let current = array[i];

    if (current.startTime >= runningMeeting.startTime && current.startTime <= runningMeeting.endTime ) {
      runningMeeting.endTime = Math.max(current.endTime, runningMeeting.endTime);
    } else {
      meetings.push(runningMeeting);
      runningMeeting = current;
      [startTime, endTime] = [ runningMeeting.startTime, runningMeeting.endTime ];
    }
  };
  meetings.push(runningMeeting);

  return meetings;
};

console.log(mergeRanges([
  {startTime: 0,  endTime: 1},
  {startTime: 9,  endTime: 10},
  {startTime: 10, endTime: 12},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
]));

