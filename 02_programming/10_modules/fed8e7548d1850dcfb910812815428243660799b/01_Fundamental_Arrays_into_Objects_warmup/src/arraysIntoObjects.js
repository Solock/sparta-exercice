const arraysIntoObjects = (keysArray, valuesArray) => {

  const carte = Object.fromEntries(keysArray.map((_, i) => [keysArray[i], valuesArray[i]]));

  return carte;
  /// Code your function here
};


// Don't change this line for tests to run properly
export default arraysIntoObjects;
