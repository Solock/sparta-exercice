function mapLoop(someNumbers, double) {
  // Code the function here.

  let newNumbers = [];

  for (const element of someNumbers){
    const result = double(element);

    newNumbers.push(result);
  }

  return newNumbers;

}

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
