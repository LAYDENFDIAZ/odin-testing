import capitalize from "./capitalize";
import reverseString from "./reverseString";
import calculator from "./calculator";
import caesarCipher from "./caesarCipher";
import analyzeArray from "./analyzeArray";

test("capitalizes first letter of string", () => {
  expect(capitalize("blue moon")).toBe("Blue moon");
});

test("reverses string", () => {
  expect(reverseString("how to")).toBe("ot woh");
});

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts 5 - 3 to equal 2", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("encrypts text using caesarCipher", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("analyzes an array of numbers", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
