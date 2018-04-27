const longestSubstringOfUniq = (string) => {
  const letters = new Set();
  let lengthMax = 0;

  let begin = 0;
  let end = 0;

  while (end < string.length) {
    if (letters.has(string[end])) {
      letters.delete(string[begin]);
      begin++;
    } else {
      letters.add(string[end]);
      end++
      lengthMax = Math.max(lengthMax, end - begin)
    }
  }
  return lengthMax;
}

string1 = "abcabcbb";
string2 = "bbbbb";
string3 = "pwwkew";

console.log(longestSubstringOfUniq(string1)) // 3
console.log(longestSubstringOfUniq(string2)) // 1
console.log(longestSubstringOfUniq(string3)) // 3