let mockArray = [];
let mockObject = {};

beforeEach(() => {
  mockArray = [];
  mockObject = {};
});

describe("Let the tests on arrays begin !", () => {

  // The following arrays are a short list of "must watch" movies.
  // Write a test for each of them, respecting the conditions written in the requirements.
  // Be sure to always test if you test passes with the right conditions but also if
  // it does fail with the wrong conditions. Don't forget `expect.assertions`!

  // Here's an example:
  test("Should be a collection of 2 movies", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger"];

    expect(mockArray.length).toBe(2);
  })

  // Create a test that ensures that "Alien the 8th passenger" is present in mockArray.
  test("Alien the 8th passenger is present in mockArray", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger","Ip Man","Tombeau des lucioles", "fight club"];
    expect(mockArray.includes("Alien the 8th passenger")).toEqual(true);
  })

  // Create a test that fails if "Indiana Jones 4" is present in mockArray.
  test("Indiana Jones 4 is in mockArray", () => {
    expect.assertions(1);

    mockArray = ["Into the wild", "Alien the 8th passenger","Ip Man","Tombeau des lucioles", "fight club"];
    expect(mockArray.includes("Indiana Jones 4")).toBe(true);
  })

  // Create a test fails if the list has less than 5 elements.
  test("Array got less 5 element", () => {
    expect.assertions(1);

    mockArray = ["Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];
    expect(mockArray.length).toBe(4);
  })


  // Create a test that checks if the array only contains String element.
  // Remember that a test is code, you are not limited to using `expect`.
  test("Create a test that checks if the array only contains String element.", () => {
    expect.assertions(2);

    mockArray = ["Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];
    const mockArray2 = [1, "Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];

    let flag: boolean = true;
    mockArray.forEach(function (element){

      if (typeof element !== "string") {
        flag = false;
      }
    }

  );

    const flag2: boolean = mockArray2.every( (element) => {return typeof element === "string"});

    expect(flag).toEqual(true);
    expect(flag2).toEqual(false);
  })

  // Create a test that passes if there's at least one film with "Lord of the rings" inside mockArray.
  test(" Create a test that passes if there's at least one film with 'Lord of the rings' inside mockArray.", () => {
    expect.assertions(1);

    mockArray = ["Lord of the rings : the return of the king", "Into the wild", "Alien the 8th passenger", "Tombeau des lucioles", "fight club"];

    const result = mockArray.forEach((element) => {
      const value = "Lord of the rings";
      if (element.includes(value) !== true) {
      }
    })


    expect(result).toEqual(true);
  })

  //Create a test that checks if the elements in mockArray respect that the strings are the same with the right order as solutionArray
  //eg : mockArray = ["Blue","Blue","Red", "Yellow"] would fail the test
  test("Two array are same", () => {
    expect.assertions(1);
    mockArray = ["Blue", "Red", "Blue", "Yellow"];
    const solutionArray = ["Blue", "Red", "Blue", "Yellow"];

    const result = mockArray.toString();
    const result1 = solutionArray.toString();

    let flag:boolean = true;
    if (result !== result1) {
      flag = false;
    }

    expect(flag).toEqual(true);
  })

});

describe("Let the tests on objects begin !", () => {

  // Create a test that ensures that your 'command' object contains at least `fries: true` and `sauce: "Hannibal"` without checking properties one by one
  // You should do it with only one assertion.
  // Hint: we want our mock object to _match_ another smaller object (look at the documentation!)
  mockObject = {
    sauce: "Hannibal",
    fries: true,
    kebab: "Double",
    soda: "Sprite",
  };
});

//At the end, your file should contain 7 test (8 with the given example).
