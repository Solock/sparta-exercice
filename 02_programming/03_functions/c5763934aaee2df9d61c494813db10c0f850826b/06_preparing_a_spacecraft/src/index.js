function checkFuelLevel(fuel) {

  const fullFuelLevel = "Fuel level: green";

  const mediumFuelLevel = "Fuel level: yellow";

  const lowFuelLevel = "Fuel level: red";

  if (fuel < 10) {
    return lowFuelLevel;
  }
  else if (fuel < 20 && fuel >= 10) {
    return mediumFuelLevel;
  }
  else {
    return fullFuelLevel;
  }
}

function checkCargoHold(item){

  let load = item.length;

  if (load === 4 ) {
    return "Full";

  } else if (load  > 0 && load < 4) {
    return "Spaces available: " + (4 - load);

  } else if (load  > 4) {
    return "Over capacity by " + (load - 4) + " items.";
  }
}

console.log(checkCargoHold(2));

// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
