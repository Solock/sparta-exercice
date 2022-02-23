type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  const split = name.split(" ");
  return {
    firstName: split[0],
    lastName: split[1]
  }
}
