const GetCountryInformationService = require("../../src/exercise-2/get-country-information.service");

describe("get country information service integration test", () => {
  const getCountryInformationService = new GetCountryInformationService();

  it("should return the correct number of the countries in the world", () => {
    expect(
      getCountryInformationService.numberOfCountriesInTheWorld()
    ).toStrictEqual(5);
  });

  it("should return the country with most languages", () => {
    expect(
      getCountryInformationService.countryWithMostOfficialLanguages()
    ).toStrictEqual("BE");
  });

  it("should return the country with most languages including german", () => {
    expect(
      getCountryInformationService.countryWithMostOfficialLanguages(true)
    ).toStrictEqual("BE");
  });

  it("should return the most common official language", () => {
    expect(
      getCountryInformationService.mostCommonOfficialLanguage()
    ).toStrictEqual("DE");
  });
});
