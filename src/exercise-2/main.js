console.log("~~~ EXERCISE 2 ~~~");

const GetCountryInformationService = require("./get-country-information.service");

const getCountryInformationService = new GetCountryInformationService();

const numberOfCountriesInTheWorld =
  getCountryInformationService.numberOfCountriesInTheWorld();

const countryWithMostOfficialLanguagesWithGermanIncluded =
  getCountryInformationService.countryWithMostOfficialLanguages(true);

const countryWithMostOfficialLanguages =
  getCountryInformationService.countryWithMostOfficialLanguages();

const mostCommonOfficialLanguage =
  getCountryInformationService.mostCommonOfficialLanguage();

console.log(
  `🚀 Number of the countries in the world: ${numberOfCountriesInTheWorld}`
);

console.log(
  `🚀 Country with most official languagens with german included: ${countryWithMostOfficialLanguagesWithGermanIncluded}`
);

console.log(
  `🚀 Country with most official languages: ${countryWithMostOfficialLanguages}`
);

console.log(`🚀 Most common official language: ${mostCommonOfficialLanguage}`);
