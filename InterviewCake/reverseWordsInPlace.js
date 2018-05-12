const reverseChars = (arr, left = 0, right = arr.length - 1) => {
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
}

const reverseWords = arr => {
  reverseChars(arr);

  // find array of space indexes
  const spaces = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') spaces.push(i);
  }

  // for each space index
  // reverse chars for letters from (previousIndex + 1) to (currentIndex - 1)
  for (let j = 0; j <= spaces.length; j++) {
    let beginOfWord = spaces[j - 1] || -1;
    let endOfWord = spaces[j] || arr.length;
    reverseChars(arr, beginOfWord + 1, endOfWord - 1);
  }

  return arr;
}

var message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join('')); // steal pound cake