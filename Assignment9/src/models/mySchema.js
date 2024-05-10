const mongoose = require("mongoose");
const nestedAdd = new mongoose.Schema({
  street: String,
  city: String,
});
const mySchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 5,
    required: true,
  },
  age: {
    type: Number,
    min: 10,
    max: 50,
    validate: {
      validator: (v) => v % 2 == 0,
      message: (props) => "not even number",
    },
  },
  address: nestedAdd,
  hobbies: [String],
});
console.log("Schema");
module.exports = mongoose.model("myCollection", mySchema);
