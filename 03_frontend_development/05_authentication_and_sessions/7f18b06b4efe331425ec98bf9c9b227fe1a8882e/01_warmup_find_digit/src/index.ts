// Code here
function findDigit(anArrayOfNumbers: number[], numberSearch: number): number[] {
  const newArray: number[] = [];

  anArrayOfNumbers.filter((element) => {
    if (element.toString().includes(numberSearch.toString())) {
      newArray.push(element);
    }
  });
  return newArray;
}

export { findDigit };
