const findCloseParens = (str, idx) => {
  let count = 0;

  for (let i = idx + 1; i < str.length; i++) {
    if (str[i] === "(") count += 1;
    if (str[i] === ")") {
      if (count === 0) return i;
      count -= 1;
    }
  }
};

console.log(findCloseParens('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10)); // 79