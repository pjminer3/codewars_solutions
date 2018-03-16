const mergeRanges = (arr = []) => {
  arr = arr.sort((a, b) => {
    return a.startTime > b.startTime ? 1 : -1;
  });
  
  let newTimeObj = arr[0];
  const newCalendar = [];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    if (current.startTime > newTimeObj.endTime) {
      // shovel old meeting block in and create a new object to represent a time gap
      newCalendar.push(newTimeObj);
      newTimeObj = arr[i];
    } else if (current.endTime > newTimeObj.endTime) {
      // re-adjust end time to the furthest
      newTimeObj.endTime = current.endTime;
    }
  }
  // get the final object in the newCalendar
  newCalendar.push(newTimeObj);
  return newCalendar;
};

console.log(mergeRanges([
  {startTime: 3,  endTime: 5},
  {startTime: 0,  endTime: 1},
  {startTime: 10, endTime: 12},
  {startTime: 4,  endTime: 8},
  {startTime: 9,  endTime: 10},
])[2]); //   [ {startTime: 0, endTime: 1}, {startTime: 3, endTime: 8}, {startTime: 9, endTime: 12}, ]
// console.log(mergeRanges()); // 