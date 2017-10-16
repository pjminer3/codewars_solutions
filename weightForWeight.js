/* 
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.
*/




function orderWeight(strng) {
    // create array of pairs; elements of 2 element arrays => the string weight and it's 'weight'
    // pairs in sorted alphabetical order
    var pairArr = [];
    var numArr = strng.split(' ').sort();
    for (var i = 0; i < numArr.length; i++) {
      var numString = numArr[i];
      var numSum = 0;
      var charArr = numString.split('');
      for (var j = 0; j < charArr.length; j++) {
        numSum += parseInt(charArr[j]);
      }
      pairArr.push([numString, numSum]);
    }

    // create array of values ('weights') sorted smallest to largest
    var sortedArray1 = pairArr.map(function(pair) {
      return pair[1];
    }).sort(function(a, b) {
      return a - b;
    });

    // create empty key of indexes (string weights);
    var keyArr = [];

    // loop through the value array, trying to find a matching value in the pair multi-dimensional array
    // once found, push the key to the keyArr
    // set that pairs value (index 1) to 'x' so as not to find it again
    sortedArray1.forEach(function(value) {
      for (var k = 0; k < pairArr.length; k++) {
        if (value === pairArr[k][1]) {
          keyArr.push(pairArr[k][0])
          pairArr[k][1] = 'x';
          break;
        }
      }
    })

    return keyArr.join(' ');
}

