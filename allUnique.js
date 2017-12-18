function hasUniqueChars(str){
  // ...
  const obj = {};
  
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = 1;
  }
  
  return str.length === Object.keys(obj).length;
}