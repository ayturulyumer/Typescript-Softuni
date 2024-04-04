function sumOfElements(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}

function sumInverse(array: number[]): number {
  return array.reduce((acc, curr) => acc + 1 / curr, 0);
}

function concatenate(array: number[]): string {
  return array.join("");
}

// Example usage:
const inputArray: number[] = [2, 4, 8, 16]

console.log(sumOfElements(inputArray));
console.log(sumInverse(inputArray));
console.log(concatenate(inputArray));
