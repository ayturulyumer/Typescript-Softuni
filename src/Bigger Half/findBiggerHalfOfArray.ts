function findBiggerHalfOfArray(array: number[]): number[] {
  let sortedArray = array.sort((a, b) => a - b);

  return sortedArray.slice(sortedArray.length / 2, sortedArray.length);
}

console.log(findBiggerHalfOfArray([3,19,14,7,2,19,6]));
