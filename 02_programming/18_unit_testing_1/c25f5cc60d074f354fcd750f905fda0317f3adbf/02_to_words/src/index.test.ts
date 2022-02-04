import { toWords } from "./index";

describe("try some test again", () => {
  test("Try if value is an array", () => {

    const result = toWords("High-tech product");

    expect(result).toEqual(["High", "tech", "product"]);
  })

  test("Try if parameter is a string and return an array", () => {
    const value ="Passer une bonne journée";
    const result = toWords(value);

    expect(typeof value).toBe("string");
    expect(typeof result).toBe("object");
  })
})
