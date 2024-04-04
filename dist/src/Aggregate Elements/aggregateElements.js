"use strict";
function sumOfElements(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
function sumInverse(array) {
    return array.reduce((acc, curr) => acc + 1 / curr, 0);
}
function concatenate(array) {
    return array.join("");
}
// Example usage:
const inputArray = [2, 4, 8, 16];
console.log(sumOfElements(inputArray));
console.log(sumInverse(inputArray));
console.log(concatenate(inputArray));
//# sourceMappingURL=aggregateElements.js.map