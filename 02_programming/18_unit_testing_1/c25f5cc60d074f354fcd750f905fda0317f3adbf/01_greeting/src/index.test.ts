import { greet } from "./index";

test("Enter a string equal name in parameter and result be 'Hello string' but string is in UpperCase", function() {
  const result = greet("McQueen");

  expect(result).toBe("Hello MCQUEEN!")
})
