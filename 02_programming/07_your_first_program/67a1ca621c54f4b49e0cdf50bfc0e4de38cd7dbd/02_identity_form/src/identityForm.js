const identityForm = (reader) => {

  reader.question("What is your first name? ", (first) =>{


    reader.question("What is your last name? ", (last) =>{


      reader.question("age", (age) =>{

        console.log(`Your name is ${first} ${last} and you are ${age}.`);

        reader.close();
      });
    });
  });
  // Code here
};

// Leave line below for tests to work
module.exports = identityForm;
