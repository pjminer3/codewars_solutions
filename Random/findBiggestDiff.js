const findBiggestDiff = (arr) => {
    if (!arr.length || arr.length === 1) {
        return -1;
    }

    let min = arr[0];
    let diff = 0;

    for (let i = 1; i < arr.length; i++) {
        diff = Math.max(diff, arr[i] - min);
        min = Math.min(min, arr[i]);
    }

    return diff;
};

console.log(findBiggestDiff([-2, 3, 10, 2, 4, 8, 1])); // 8
console.log(findBiggestDiff([])); // -1
console.log(findBiggestDiff([5])); // -1