const maxDuffleBagValue = (arrOfCakeObjects, maxCapacity) => {
    if (maxCapacity === 0) return 0;
    
    const cakeHaulBasedOnCapacity = Array(maxCapacity + 1).fill(0);

    for (let currentCapacity = 0; currentCapacity <= maxCapacity; currentCapacity++) {
        arrOfCakeObjects.forEach( cake => {
            let maxValue = 0;
            if (cake.weight <= currentCapacity) {
                let remainder = currentCapacity - cake.weight;
                maxValue += cake.value;
                maxValue += cakeHaulBasedOnCapacity[remainder];
            }
            cakeHaulBasedOnCapacity[currentCapacity] = Math.max(maxValue, cakeHaulBasedOnCapacity[currentCapacity]);
        });
    }

    return cakeHaulBasedOnCapacity[maxCapacity];
}


var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var cakeTypes2 = [
    {weight: 0, value: 0},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

// // console.log(buildMatrix(3, 20));

// console.log(getCakeMetrics(cakeTypes)[0]);
// console.log(getCakeMetrics(cakeTypes)[1]);

console.log(maxDuffleBagValue(cakeTypes, capacity)); // 555
console.log(maxDuffleBagValue(cakeTypes, 0)); // 0
console.log(maxDuffleBagValue(cakeTypes2, capacity)); // 555