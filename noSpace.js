const noSpace = (x) => {
  return x.split('').map( (letter) => {
    if (letter !== ' ') {
      return letter;
    } else {
      return;
    }
  } ).join('');
};