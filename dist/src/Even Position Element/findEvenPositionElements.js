"use strict";
function findEvenPositionElements(array) {
    let evenElements = [];
    for (let i = 0; i < array.length; i += 2) {
        evenElements.push(array[i]);
    }
    return evenElements.join(" ");
}
const elements = findEvenPositionElements(["5", "10"]);
console.log(elements);
//# sourceMappingURL=findEvenPositionElements.js.map