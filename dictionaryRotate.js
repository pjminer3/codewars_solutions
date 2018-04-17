const findRotation = (arr) => {
    // brute force is check every single word and find the word that is less than the previous word
    let start = 0;
    let end = arr.length - 1;
    let middle;

    // edgecase
    if (arr[start] < arr[end]) return 0;

    // break case 
    while (end - start > 1) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] < arr[start]) {
            end = middle;
        } else {
            start = middle;
        }
    }

    return end;
};

var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

var words2 = [
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

console.log(findRotation(words)); // 5
console.log(findRotation(words2)); // 0