export function sumTwoSmallestNumbers(numbers: number[]): number {
  let lowerOne = numbers[0];
  let lowerTwo = numbers[1];

  numbers.map((element) => {
    if (element < lowerOne) {
      lowerTwo = lowerOne;
      lowerOne = element;
    }
  })
  const sum = lowerOne + lowerTwo;
  return sum;
}


