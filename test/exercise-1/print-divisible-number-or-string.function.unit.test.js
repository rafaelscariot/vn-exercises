const printDivisibleNumberOrStringFunction = require("../../src/exercise-1/print-divisible-number-or-string.function");

describe("print divisible number or string function unit test", () => {
  it("should return the INVALID_MAX_NUMBER error, given invalid values for the maxNumber parameter", () => {
    expect(() => {
      printDivisibleNumberOrStringFunction("3");
    }).toThrow(new Error("INVALID_MAX_NUMBER"));

    expect(() => {
      printDivisibleNumberOrStringFunction("Visual Nuts");
    }).toThrow(new Error("INVALID_MAX_NUMBER"));
  });

  it("should call the logger 15 times and with the correct data, given 15 for the maxNumber parameter", () => {
    global.console = { log: jest.fn() };

    printDivisibleNumberOrStringFunction(15);

    expect(console.log).toBeCalledTimes(15);

    expect(console.log).toBeCalledWith("Visual" && "Nuts" && "Visual Nuts");

    expect(console.log).toBeCalledWith(
      1 && 2 && 4 && 7 && 8 && 10 && 11 & 13 && 14
    );

    expect(console.log).not.toBeCalledWith(3 && 5 && 6 && 9 && 12 && 15);
  });
});
