const mergeRanges = (arr = []) => {
  arr = arr.sort((a, b) => {
    return a.startTime > b.startTime ? 1 : -1;
  });
  
  const newCalendar = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let lastMeeting = newCalendar[newCalendar.length - 1];
    // if there is no overlap between current start time and lastMeeting endtime
    if (current.startTime > lastMeeting.endTime) {
      // shovel in a new last-meeting
      newCalendar.push(current);
    }
    lastMeeting.endTime = Math.max(current.endTime, lastMeeting.endTime);
  }
  return newCalendar;
};

console.log(mergeRanges([{startTime: 3,  endTime: 5}, {startTime: 0,  endTime: 1}, {startTime: 10, endTime: 12}, {startTime: 4,  endTime: 8}, {startTime: 9,  endTime: 10}])[2]); //   [ {startTime: 0, endTime: 1}, {startTime: 3, endTime: 8}, {startTime: 9, endTime: 12}, ]
console.log(mergeRanges([{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}])[0]); // { startTime: 1, endTime: 3}
console.log(mergeRanges(  [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}])[0]); // { 1, 5}
console.log(mergeRanges(  [
  {startTime: 1, endTime: 10},
  {startTime: 2, endTime: 6},
  {startTime: 3, endTime: 5},
  {startTime: 7, endTime: 9},
])[0]); // { 1, 10}