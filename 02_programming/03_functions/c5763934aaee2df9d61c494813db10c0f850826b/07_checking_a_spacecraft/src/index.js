// Code here

const stealthyFuelLevelCheck = (fuel) => (fuel < 10) ? "Fuel level: red" : (fuel < 20 && fuel >= 10) ? "Fuel level: yellow" : "Fuel level: green";

const stealthyCargoHoldCheck = (item) => {

  let load = item.length;

  if (load === 4 ) {
    return "Full";

  } else if (load  > 0 && load < 4) {
    return "Spaces available: " + (4 - load);

  } else if (load  > 4) {
    return "Over capacity by " + (load - 4) + " items.";
  }
};


// Do not remove last lines, it is for tests

module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
