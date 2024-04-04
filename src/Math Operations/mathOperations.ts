function mathOperations(n1: number, n2: number, operation: string): number {
  let result: number;
  switch (operation) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
    case "%":
      result = n1 % n2;
      break;
    case "**":
      result = Math.pow(n1, n2);
      break;
    default:
      throw new Error(`Invalid operation : ${operation} `);
  }
  return result;
}

let n1 = 3;
let n2 = 3;
let operation = "**";
const result = mathOperations(n1, n2, operation);
console.log(result);
