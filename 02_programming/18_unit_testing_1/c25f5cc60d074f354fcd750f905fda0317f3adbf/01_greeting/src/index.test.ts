import { greet } from "./index";

describe("Try some tests", () =>{


  test("Test with value in name", () => {

    expect.assertions(3);

    const result = greet("Francis");
    const result1 = greet("Bob");
    const result2 = greet("Sofiane");

    expect(result).toBe("Hello FRANCIS!");
    expect(result1).toBe("Hello BOB!");
    expect(result2).toBe("Hello SOFIANE!");
  })

  test("test without value in name", () => {
    expect.assertions(1);

    const result = greet();
    expect(result).toBe("Hello WORLD!");
  })

  test("test value is string", () =>  {
    expect.assertions(2);

    const result = greet("Pablo");
    const result1 = greet("");

    expect(typeof result).toBe("string");
    expect(typeof result1).toBe("string");
  })
})

