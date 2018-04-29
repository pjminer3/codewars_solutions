const interSectionRectagle = (rectOne, rectTwo) => {
  // break the problem into easier problems: first find xOverlap then yOverlap
  // find the XOverlap
  const xOverlap = findOverlap(rectOne, rectTwo, 'x');
  // find the yOverlap
  const yOverlap = findOverlap(rectOne, rectTwo, 'y');
    // make sure they both exist (if not, return null)
  if (!xOverlap || !yOverlap) return null;

  return Object.assign(xOverlap, yOverlap);
};

const findOverlap = (one, two, axis) => {
  const start = axis === 'x' ? 'leftX' : 'bottomY';
  const length = axis === 'x' ? 'width' : 'height';

  // find smaller finish
  let smallerFinish = Math.min(one[start] + one[length], two[start] + two[length]);
  // find larger start
  let largerStart = Math.max(one[start], two[start]);
  // check if smaller finish is smaller than larger start (if so return null)
  if (smallerFinish < largerStart) return null;

  // find higherStart
  let higherStart = Math.max(one[start], two[start]);

  // return the proper key/value pairs given the axis
  return {[start]: higherStart, [length]: smallerFinish - higherStart};
};

// console.log(findOverlap({leftX: 1, bottomY: 1, width: 6, height: 3}, {leftX: 1, bottomY: 1, width: 3, height: 6}, 'x'));

console.log(interSectionRectagle({leftX: 1, bottomY: 1, width: 6, height: 3}, {leftX: 1, bottomY: 1, width: 3, height: 6})); // {lefX: 1, bottomY: 1, width: 3, height: 3}
console.log(interSectionRectagle({leftX: 1, bottomY: 1, width: 3, height: 1}, {leftX: 2, bottomY: 0, width: 2, height: 4})); // {lefX: 2, bottomY: 1, width: 2, height: 1}

// sample rectangle
/*
  myRectangle = {
    leftX: 1,
    bottomY: 1,

    width: 6,
    height: 3,
  }
*/
