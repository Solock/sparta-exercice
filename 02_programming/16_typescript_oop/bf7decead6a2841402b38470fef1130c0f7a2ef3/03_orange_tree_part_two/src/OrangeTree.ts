import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  orange: string[] = ["🍊"];

  constructor(age: number) {
    super(age);
  }

  ageOnYear(age: number): number {

    return this.croissance(age);

  }

  growOranges(age: number): string[] {

    if (age >= 0 && age <= 4) {
      return this.orange;
    }
    else if (age >= 5  && age <= 10) {
      this.orange.fill("🍊", 0, 10)
      return this.orange;
    }
    else if (age >= 11 && age <= 20) {
      this.orange.fill("🍊", 0, 20)
      return this.orange;
    }
    else if (age >= 21 && age <= 40) {
      this.orange.fill("🍊", 0, 5)
      return this.orange;
    }
    else {
      return this.orange;
    }

  }

}

// Leave the line below for tests to work properly.
export { OrangeTree };
