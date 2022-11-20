const printDivisibleNumberOrString = require("../../src/exercise-1/print-divisible-number-or-string.js");

test("Given invalid values for the maxNumber parameter, should return the INVALID_MAX_NUMBER error", () => {
  expect(() => {
    printDivisibleNumberOrString("3");
  }).toThrow(new Error("INVALID_MAX_NUMBER"));

  expect(() => {
    printDivisibleNumberOrString("Visual Nuts");
  }).toThrow(new Error("INVALID_MAX_NUMBER"));
});

test("Given 15 for the maxNumber parameter, should call the logger correctly", () => {
  global.console = { log: jest.fn() };

  printDivisibleNumberOrString(15);

  expect(console.log).toBeCalledTimes(15);

  expect(console.log).toBeCalledWith("Visual" && "Nuts" && "Visual Nuts");

  expect(console.log).toBeCalledWith(
    1 && 2 && 4 && 7 && 8 && 10 && 11 & 13 && 14
  );

  expect(console.log).not.toBeCalledWith(3 && 5 && 6 && 9 && 12 && 15);
});
