const fib = (n) => {
    let prevPrevVal;
    let prevVal = 0
    let value = 1;

    for (let i = 1; i < n; i++) {
        prevPrevVal = prevVal;
        prevVal = value;
        value = prevPrevVal + prevVal;
    }

    return value;
};

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(9)); // 34