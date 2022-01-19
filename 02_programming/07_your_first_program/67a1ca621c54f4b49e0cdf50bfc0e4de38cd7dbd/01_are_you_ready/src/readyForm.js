const readyForm = (reader) => {
  reader.question("Are you ready today?", (answer) => {
    console.log(`Wow! ${answer} ???!! Lets go!`);
  });
  // Code here
};

// Leave line below for tests to work
module.exports = readyForm;
