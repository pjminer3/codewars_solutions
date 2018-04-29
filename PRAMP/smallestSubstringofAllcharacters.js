function getShortestUniqueSubstring(arr, str) {
  // input: array of uniq chars (arr), a string (str)
  let arrCopy;
  let end;
  let smallestSubstring = '';
  let minLengthOfSubstring = Infinity;
  
  for (let start = 0; start < str.length; start++) {
    arrCopy = Array.from(arr);
    end = start;
    
    while (arrCopy.length && end < str.length) {
      let idx = arrCopy.indexOf(str[end]);
      if (idx >= 0) {
        arrCopy.splice(idx, 1);
      }
      end++;
    }
    
    if (arrCopy.length === 0) {
      let currentSubstring = str.substring(start, end);
      let currentLength = currentSubstring.length;
      if (currentLength < minLengthOfSubstring) {
        smallestSubstring = currentSubstring;
        minLengthOfSubstring = currentLength;
      }
    } else {
      break; // no long trying each substring
    }
  }
  
  return smallestSubstring;
}

console.log(getShortestUniqueSubstring(["A","B","C"], "ADOBECODEBANCDDD"));