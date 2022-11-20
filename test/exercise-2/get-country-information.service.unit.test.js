const GetCountryInformationService = require("../../src/exercise-2/get-country-information.service");

describe("get country information service unit test", () => {
  const getCountryInformationService = new GetCountryInformationService();

  it("should return the INVALID_MAX_NUMBER error, given invalid values for the maxNumber parameter", () => {
    expect(() => {
      getCountryInformationService.countryWithMostOfficialLanguages(
        "Visual Nuts"
      );
    }).toThrow(new Error("INVALID_PARAM"));
  });

  it("should return the INVALID_MAX_NUMBER error, given invalid values for the maxNumber parameter", () => {
    expect(() => {
      getCountryInformationService.countryWithMostOfficialLanguages(666);
    }).toThrow(new Error("INVALID_PARAM"));
  });
});
