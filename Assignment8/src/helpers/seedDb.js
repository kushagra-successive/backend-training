const Country = require("../models/country");
const countrySeedData = require("../playingCountry");

const seedDb = async () => {
  await Country.deleteMany({}); //delete previous records
  await Country.insertMany(seedCountry);
};

module.exports=seedDb;