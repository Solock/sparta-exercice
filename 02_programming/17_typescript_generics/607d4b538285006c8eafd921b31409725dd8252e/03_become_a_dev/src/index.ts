
type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
}


type Dev = Human & {knownLanguage: string};


function becomeADev(objet: Human): Dev {
  const mcQueen: Dev = {
    name: objet.name,
    age: objet.age,
    knowsDev: true,
    knownLanguage: "JavaScript",
  }
  return mcQueen;
}





// Leave the line below for tests to work properly.
export { becomeADev };
