function forEachLoop(someNumbers, repeat) {
  // Code the function here.
  for (const numbers of someNumbers) {
    repeat(numbers);
  }
}

const someNumbers = [1, 2, 3, 4];

function repeat(someNumbers) {
  console.log(`- ${someNumbers}`);
}
const poudlard = ["Serpentard", "Griffondor", "Poufsouffle", "Serdaigle"];
// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
