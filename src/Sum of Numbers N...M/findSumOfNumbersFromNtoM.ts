function findSumOfNumbersFromNtoM(n: string, m: string): number {
  const numN: number = parseInt(n);
  const numM: number = parseInt(m);
  let sum: number = 0;

  for (let i = numN; i <= numM; i++) {
    sum += i;
  }
  return sum;
}

const N: string = "-8";
const M: string = "20";

const sum: number = findSumOfNumbersFromNtoM(N, M);
console.log(sum);
