const Country = require("../models/country");
const seedCountryData = require("../playingCountry");

const seedDb = async () => {
  await Country.deleteMany({}); //delete previous records
  await Country.insertMany(seedCountryData);
};

module.exports = seedDb;
