function addition(valeur1, valeur2, signe) {
  // Code here
}

function substraction(valeur1, valeur2, signe) {
  // Code here
}

function multiplication(valeur1, valeur2, signe) {
  // Code here
}

function division(valeur1, valeur2, signe) {
  // Code here
}

function chooseOperation(valeur1, valeur2, signe) {
  if(Number.isInteger(valeur1 / valeur2)){
    console.log(chooseOperation);
  }
  else{
    throw new Error("It's not integer numbers, try again.");
  }
// Code here
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
