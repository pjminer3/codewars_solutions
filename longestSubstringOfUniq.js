const longestSubstringOfUniq = (string) => {
  let maxString = '';
  let maxLength = 0;

  let curString = '';
  let length = 0;
  let letters = {};

  let begin = 0;
  let end = 0;

  while (end < string.length) {
    let currentLetter = string[end];
    if (letters[currentLetter]) {
      if (length > maxLength) {
        updateMaxes(curString, length);
      }
      resetTrackers(currentLetter)
    } else {
      incrementAndUpdate(currentLetter);
    }
  }

  if (length > maxLength) {
    updateMaxes(curString, length);
  }

  return maxString;

  function incrementAndUpdate(currentLetter) {
    letters[currentLetter] = true;
    curString += currentLetter;
    length++
    end++;
  }

  function resetTrackers(currentLetter) {
    length = 0;
    curString = '';
    letters = {};
    begin = string.indexOf(currentLetter, begin) + 1;
    end = begin;
  }

  function updateMaxes(string, length) {
    maxString = curString;
    maxLength = length;
  }
};

console.log(longestSubstringOfUniq('pwwkew')); // kwe