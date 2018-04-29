// brute force: iterate through the array until you find a word that has a lower value than the previous worc
// 

const findRotate = (arr) => {
    let start = -1;
    let end = arr.length;
    let middle;

    while (start + 1 !== end) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] < arr[start]) {
            if (arr[middle - 1] >= arr[start]) {
                return middle;
            }
            end = middle;
        } else {
            start = middle;
        }
    }

    return 0;
};

console.log(findRotate(['b', 'c', 'd', 'a'])); // 3
console.log(findRotate(['c', 'd', 'a', 'b'])); // 2
console.log(findRotate(['a', 'b', 'c'])); // 0