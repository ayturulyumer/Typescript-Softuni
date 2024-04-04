function findEvenPositionElements(array: string[]): string {
  let evenElements: string[] = [];

  for (let i = 0; i < array.length; i += 2) {
    evenElements.push(array[i]);
  }

  return evenElements.join(" ");
}

const elements = findEvenPositionElements(["5","10"]);
console.log(elements);
