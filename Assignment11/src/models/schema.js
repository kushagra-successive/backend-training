const mongoose = require("mongoose");
const mySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});
const collection = mongoose.model("profileCollection", mySchema);
module.exports = collection;
