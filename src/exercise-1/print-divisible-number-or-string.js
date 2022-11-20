const printDivisibleNumberOrString = (maxNumber) => {
  if (typeof maxNumber !== "number") throw new Error("INVALID_MAX_NUMBER");

  let index = 1;
  while (index <= maxNumber) {
    switch (true) {
      case index % 3 == 0 && index % 5 == 0:
        console.log("Visual Nuts");
        break;
      case index % 3 == 0:
        console.log("Visual");
        break;
      case index % 5 == 0:
        console.log("Nuts");
        break;
      default:
        console.log(index);
        break;
    }

    index++;
  }
};

module.exports = printDivisibleNumberOrString;
