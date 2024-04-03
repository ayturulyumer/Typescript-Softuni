"use strict";
function findLargestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
const num1 = 5;
const num2 = -3;
const num3 = 16;
const number = findLargestNumber(num1, num2, num3);
console.log(`The largest number is ${number}`);
