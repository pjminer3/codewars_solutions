// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be 
// rearranged to match str2, otherwise returns false.

// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

function scramble(str1, str2) {
 // converst strings to only lowercase
 // create counter-hashes out of each string
 // iterate through str2hash matching it with values str1hash
   // if there is ever a value absent in string1hash or larger than str1hash return false
   // else return true
   var obj1 = createCounterObj(str1);
   var obj2 = createCounterObj(str2);
   
  for (var letter in obj2) {
    if (obj1[letter] === undefined || obj2[letter] > obj1[letter]) {
       return false;
    }
  } 
   
   return true;
}

function createCounterObj(str) {
  var counter = {};
  var string = str.slice().toLowerCase();
  for (var i = 0; i < string.length; i++) {
    counter[string[i]] = counter[string[i]] + 1 || 1;
  }
  return counter;
}