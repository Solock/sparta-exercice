function addition(valeur1, valeur2, signe) {
  return addition(valeur1 + valeur2);
  // Code here
}

function substraction(valeur1, valeur2, signe) {
  return substraction(valeur1 - valeur2);
  // Code here
}

function multiplication(valeur1, valeur2, signe) {
  return multiplication(valeur1 * valeur2);
  // Code here
}

function division(valeur1, valeur2, signe) {
  return division.callback(valeur1 / valeur2);
  // Code here
}

function chooseOperation(valeur1, valeur2, callback) {
  if(Number.isInteger(valeur1 / valeur2)){
    const result = callback.chooseOperation;
  }
  else{
    throw new Error("It's not integer numbers, try again.");
  }
// Code here
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
