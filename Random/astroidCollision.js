var asteroidCollision = function(asteroids) {
  for(let i = 0; i < asteroids.length; i++) {
    if (i < asteroids.length - 1 && asteroids[i] > 0 && asteroids[i + 1] < 0) {
      const sizeLeft = Math.abs(asteroids[i]);
      const sizeRight = Math.abs(asteroids[i + 1])

      if (sizeLeft < sizeRight) {
        // remove smaller number (array[i])
        asteroids.splice(i, 1);
      } else if (sizeRight < sizeLeft) {
        // remove smaller number (array[i + 1])
        asteroids.splice(i + 1, 1);
      } else {
        // remove both because they are equal size
        asteroids.splice(i, 2);
      }
      return asteroidCollision(asteroids);
    }
  }
  // if there are no more collisions
  return asteroids;
};


console.log(asteroidCollision([5, 10, -5])); // [5, 10] 
console.log(asteroidCollision([8, -8])); // [] 
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([2, 1, -1, -2])); // [] 