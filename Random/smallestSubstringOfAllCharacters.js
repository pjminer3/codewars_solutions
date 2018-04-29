function getShortestUniqueSubstring(arr, str) {
  let minLengthSolution;

  for (let start = 0; start <= str.length - arr.length; start++) {
    for (let end = start + arr.length; end < str.length; end++) {
      let currentString = str.substring(start, end);
      if (isValidString(arr, currentString) && (!minLengthSolution || currentString.length < minLengthSolution)) {
        minLengthSolution = currentString;
      }
    }
  }

  return minLengthSolution || '';
};

function isValidString (arr, substr) {
  for (let i = 0; i < arr.length; i++) {
    if (substr.includes(arr[i])){
      arr[i] = 0;
    }  else { 
      return false;
    }
  }
  return true;
}

console.log(isValidString(['x', 'y'], 'xy'));// true


console.log(getShortestUniqueSubstring(['x', 'y', 'z'], 'xyyzyzyx')); // 'zyx'
// console.log(getShortestUniqueSubstring(['x'], 'xyz')); // 'x'
// console.log(getShortestUniqueSubstring(['x', 'z'], 'xyz')); // 'xyz'
// console.log(getShortestUniqueSubstring(['x', 'z', 'a'], 'xyz')); // ''