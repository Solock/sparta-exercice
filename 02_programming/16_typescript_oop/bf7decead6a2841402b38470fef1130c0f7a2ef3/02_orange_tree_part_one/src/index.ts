


//Code the class here.

// The class `Tree` should have the following attributes:

// - `age` (in year).
// - `height` (in cm).
// - `alive`.

class Tree {
  age: number = 0;
  height: number = 0;
  alive: boolean = true;


  constructor( age: number ) {
    this.age = age;
    this.height = this.croissance(this.age)
  }

  croissance(age: number): number{

    let height: number = 0;

    if (age >= 1 && age <= 9) {
      height = age * 25;
      return height;
    }
    else if (age >= 10 && age <= 20) {
      height = ((age - 9) * 10) + 225;
      return height;
    }
    else{
      return height;
    }
  }

  seed(): void{
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}

const myTree = new Tree(12);

console.log(myTree);

// Leave the line below for tests to work properly.
export { Tree };
