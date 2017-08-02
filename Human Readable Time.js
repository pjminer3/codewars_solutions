// Write a function, which takes a non-negative integer (seconds) as input and returns the 
// time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.



function humanReadable(seconds) {
  var result = [0, 0, 0];
  var hour = 60 * 60;
  var min = 60;
  result[0] = Math.floor(seconds / hour);
  result[1] = Math.floor((seconds - (result[0] * hour)) / min);
  result[2] = Math.floor(seconds - (result[0] * hour) - result[1] * min);
  for (var i = 0; i < result.length; i++) { 
    if (result[i] < 10) {
      result[i] = '0' + result[i].toString();
    } else {
      result[i] = result[i].toString();
    }
  }
  
  return result.join(':');
}