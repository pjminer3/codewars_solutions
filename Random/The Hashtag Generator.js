// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:

// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

// " Hello World " => "#HelloWorld"


function generateHashtag (str) {
  
  if (str.length > 140) {
    return false;
  } else if (str.length === 0) {
    return false;
  } else if (arguments.length === 0) {
    return false;
  } else if (typeof str !== 'string') {
    return false;
  }
  
  var words = str.split(' ');
  var newWords = words.map(function(word){
  	var word2 = word.slice();
    var newWord = [];
    console.log(word);
  	newWord.push(word2.charAt(0).toUpperCase());
  	newWord.push(word2.substring(1));
  	return newWord.join('');
  });
  newWords.unshift('#');
  return newWords.join('');
}

var expect = require("chai").expect

expect(generateHashtag('hello there')).to.equal('#HelloThere');
expect(generateHashtag('what what in the butt')).to.equal('#WhatWhatInTheButt');
expect(generateHashtag('longsentence')).to.equal('#Longsentence');