function addition(valeur1, valeur2) {
  return valeur1 + valeur2;
  // Code here
}

function substraction(valeur1, valeur2) {
  return valeur1 - valeur2;
  // Code here
}

function multiplication(valeur1, valeur2) {
  return valeur1 * valeur2;
  // Code here
}

function division(valeur1, valeur2) {
  return valeur1 / valeur2;
  // Code here
}

function chooseOperation(valeur1, valeur2, callback) {
  if (Number.isInteger(valeur1) && Number.isInteger(valeur2) && callback === addition || callback === substraction || callback === multiplication || callback === division) {
    return callback(valeur1, valeur2);
  }
  else{
    throw new Error("It's not integer numbers, try again.");
  }
// Code here
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
