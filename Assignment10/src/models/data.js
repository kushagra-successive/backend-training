const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const mySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
    message: (props) => `${props.value} is not a valid name!`,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 26,
    message: (props) => `${props.value} is not a email!`,
  },
  password: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 90,
    message: (props) => `${props.value} is not a valid password`,
  },
});
mySchema.methods.generateToken = async (payload) => {
  try {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
  } catch (error) {
    console.log(error.message);
  }
};
const Document = mongoose.model("userCollection", mySchema);
module.exports = Document;
