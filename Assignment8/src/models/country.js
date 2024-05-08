const mongoose = require("mongoose");
const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  playing: {
    type: Boolean,
    required: true,
  },
});
const Country = mongoose.model("Country", countrySchema);
module.exports = Country;
