function wordCountEngine(document) {
  // create grammar object
  const grammar = {
    '\'': true,
    '.': true,
    ',': true,
    ':': true,
    ';': true,
    '!': true,
    '?': true,
    '"': true,
  }
  
  let newDoc = '';
  
  // strip grammar out
  for (let i = 0; i < document.length; i++) {
      // lowercase all letters
    let letter = document[i];
    
    if (grammar[letter]) {
      continue;
    }
    
    letter = letter.toLowerCase();
    letter.trim();
    newDoc += letter;
  }
  const wordArr = newDoc.split(' ');
  
  // create map
  const wordMap = new Map();
  
  for (let j = 0; j < wordArr.length; j++) {
    let word = wordArr[j];
    if (word === '') continue;
    if (!wordMap.has(word)) {
      wordMap.set(word, 1);
    } else {
      let currentVal = wordMap.get(word);
      wordMap.set(word, currentVal + 1)
    }
  }
  
  let tupleArray = Array.from(wordMap);
  
  tupleArray = tupleArray.map(tuple => {
    tuple[1] = tuple[1].toString();
    return tuple;
  })
  
  tupleArray = tupleArray.sort((a, b) => {
    return b[1] - a[1] || -1;
  });
  
  return tupleArray;
}

document = "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ";


console.log(wordCountEngine(document));
console.log(' '.trim())
console.log(' ');