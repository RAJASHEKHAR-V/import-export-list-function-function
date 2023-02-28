const peopleList = require("../country/state/city/index");
const functionReturnsFirstNames = require("../utilities/utils/index");

function getPeopleInCity(peopleList) {
  return functionReturnsFirstNames(peopleList);
}

console.log(getPeopleInCity(peopleList));
module.exports = getPeopleInCity;
