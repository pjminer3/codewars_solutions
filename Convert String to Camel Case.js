// Complete the method/function so that it converts dash/underscore delimited 
// words into camel casing. The first word within the output should be capitalized 
// only if the original word was capitalized.

// Examples:

// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior") 

// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){
  var array = str.split('-');
  array = array.map(function(word) {
    return word.split('_');
  });
  array = [].concat.apply([], array);
  
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
      console.log(array[i]);
    } else {
      array[i] = array[i].charAt(0) + array[i].slice(1).toLowerCase();
    }
  }
  
  return array.join('');
}