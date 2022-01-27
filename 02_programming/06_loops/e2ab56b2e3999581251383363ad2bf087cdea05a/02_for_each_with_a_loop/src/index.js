function forEachLoop(someNumbers, repeat) {
  // Code the function here.
  for (const numbers of someNumbers) {
    repeat(numbers);
  }
}




const poudlard = ["Serpentard", "Griffondor", "Poufsouffle", "Serdaigle"];

// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
