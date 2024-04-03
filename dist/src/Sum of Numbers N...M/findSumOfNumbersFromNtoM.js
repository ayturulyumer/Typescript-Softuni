"use strict";
function findSumOfNumbersFromNtoM(n, m) {
    const numN = parseInt(n);
    const numM = parseInt(m);
    let sum = 0;
    for (let i = numN; i <= numM; i++) {
        sum += i;
    }
    return sum;
}
const N = "-8";
const M = "20";
const sum = findSumOfNumbersFromNtoM(N, M);
console.log(sum);
