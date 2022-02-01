// Code the class here.

class Hero {
  name: string;

  constructor(name: string) {
    this.name = name;
  }


  sayHi(): string {
    return `I'm ${this.name}`;
  }
}




// Leave the line below for tests to work properly.
export { Hero };
