import { greet } from "./index";

// test("Enter a string equal name in parameter and result be 'Hello string' but string is in UpperCase", function() {
describe("Try some tests", () =>{

  test("Test with value in name", function(){
    const result = greet("Francis");
    const result1 = greet("Bob");
    const result2 = greet("Sofiane");

    expect(result).toBe("Hello FRANCIS!");
    expect(result1).toBe("Hello BOB!");
    expect(result2).toBe("Hello SOFIANE!");
  })

  test("test without value in name", function(){
    const result = greet();
    expect(result).toBe("Hello WORLD!");
  })

  test("test value is string", function() {
    const result = greet("Pablo");
    const result1 = greet("");

    expect(typeof result).toBe("string");
    expect(typeof result1).toBe("string");
  })
})
// })
