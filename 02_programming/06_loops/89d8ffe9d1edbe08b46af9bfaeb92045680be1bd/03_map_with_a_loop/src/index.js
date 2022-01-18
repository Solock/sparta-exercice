function mapLoop(someNumbers, double) {

  let newNumbers = [];

  for (const element of someNumbers){
    const result = double(element);

    newNumbers.push(result);
  }
  // console.log({newNumbers});
  return newNumbers;
  // Code the function here.
}

// const someNumbers = [1, 2, 3, 4];

// function double(someNumbers) {
//   return someNumbers * 2;
// }

// mapLoop(someNumbers, double);

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
