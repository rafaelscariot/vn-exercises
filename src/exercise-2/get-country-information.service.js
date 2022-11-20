const data = require("./data.json");

class GetCountryInformationService {
  numberOfCountriesInTheWorld() {
    return data.length;
  }

  countryWithMostOfficialLanguages(germanIncluded = false) {
    if (typeof germanIncluded !== "boolean") throw new Error("INVALID_PARAM");

    let countryName = "";
    let countryLanguagesLength = 0;

    data.forEach((country) => {
      const languagesQnt = country.languages.length;

      if (
        languagesQnt > countryLanguagesLength &&
        (germanIncluded ? country.languages.includes("de") : true)
      ) {
        countryName = country.country;
        countryLanguagesLength = languagesQnt;
      }
    });

    return countryName;
  }

  mostCommonOfficialLanguage() {
    let languages = [];

    data.forEach((country) =>
      country.languages.forEach((language) => languages.push(language))
    );

    return languages
      .reduce((previous, current, i, arr) =>
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
          ? previous
          : current
      )
      .toUpperCase();
  }
}

module.exports = GetCountryInformationService;
