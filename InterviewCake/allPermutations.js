/**
 * 
 * @param {string} str A string of uniqe characters
 */

const allPermutations = (str) => {
  if (str.length === 1) return new Set([str]);

  const perms = new Set();
  const prevPerms = allPermutations(str.slice(0, str.length - 1));
  const finalChar = str[str.length - 1];

  prevPerms.forEach( perm => {
    // console.log(perm);
    for (let i = 0; i <= perm.length; i++) {
      perms.add([...perm.slice(0, i), finalChar, ...perm.slice(i)]);
    }
  });

  return perms;
};

console.log(allPermutations([1, 2, 3]));