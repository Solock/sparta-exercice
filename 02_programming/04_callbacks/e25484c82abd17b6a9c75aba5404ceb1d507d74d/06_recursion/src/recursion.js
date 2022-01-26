const findPosition = (array, character, index ) => {


  //let found = array.find(element => element === character);

  if (typeof array === "object" && typeof array[index] == "string" && typeof character === "string" && typeof index === "number") {

    if (array[index] !== character) {
      if (index + 1 < array.length) {
        return findPosition(array, character, index + 1);
      }
      else{
        return `${character} is not present in this array.`;
      }
    }
    else if( array[index] === character){

      return `${character} is at position #${index + 1} in this array.`;

    }
  }
  else {

    throw new Error("Parameter needed.");

  }

};
  // Code here


// Leave line below for tests to work properly
module.exports = findPosition;
