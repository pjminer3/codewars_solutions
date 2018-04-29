/* Given an array of [x, y] coordinates, find the n closest to [0, 0] */

const distanceToPoint = (arr, n) => {
    // use pythagorean theorum to find the distance to each point
    // the distance will always be the length of the hypotenuse
    // x^2 + y^2 = distance^2
    
    let coordinatesWithDistance = arr.map( coordinates => {
        let distance = generateLength.apply(coordinates);
        return [coordinates, distance];
    })

    let coordinatesSortedByDistance = sortByLength(coordinatesWithDistance).map( tuple => {
      return tuple[0];
    });

    return coordinatesSortedByDistance.slice(0, n);
};

const generateLength = (x, y) => {
    let lengthSquared = Math.pow(x, 2) + Math.pow(y, 2);
    return Math.sqrt(lengthSquared);
};

const sortByLength = (arr) => {
    return arr.sort((a, b) => {
        return a[1] - b[1];
    });
};

console.log(distanceToPoint([[1, 2], [1, 3], [5, 2], [56, 3]], 1)[0][1]); // [[1, 1]]; (2)
console.log(distanceToPoint([[1, 1], [1, 3], [5, 5], [56, 3]], 2)[1][1]); // [[1, 1], [1, 3]]; (3)

