const maxDuffelBagValue = (arrOfCakeObjects, capacity) => {
    // find the best value and max it out
    // move on to the next value while there's capacity
    let cakesSortedByValue = sortCakes(arrOfCakeObjects);
    let haul = 0;

    while (capacity) {
        let mostValuableCake = cakesSortedByValue[cakesSortedByValue.length - 1];
        if (mostValuableCake.weight > capacity) {
            cakesSortedByValue.pop();
            continue;
        }
        haul += mostValuableCake.value;
        capacity -= mostValuableCake.weight;
    }

    return haul;
};

const sortCakes = (arrOfCakes) => {
    return arrOfCakes.sort((a, b) => {
        let aVal = a.value / a.weight;
        let bVal = b.value / b.weight;

        return aVal - bVal;
    });
}

var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity)); // 555