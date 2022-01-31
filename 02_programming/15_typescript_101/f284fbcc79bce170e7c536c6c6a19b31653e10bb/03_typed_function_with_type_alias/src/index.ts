
type MyTuple = [string, number];

function handleTuple(value: MyTuple): void {

  if (typeof value[0] === "string") {
    console.log(`${value[0]} is a string`);
  }

  if (typeof value[1] === "number") {
    console.log(`${value[1]} is a number`);
  }

  // Code the function here.
}

const poudlard: MyTuple = ["Harry", 12];

handleTuple(poudlard);

// Leave the line below for tests to work properly.
export { handleTuple };
