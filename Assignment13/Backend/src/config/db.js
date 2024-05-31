const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Blogging");
    console.log("Mongodb Connected Successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: `Cant Connected Database ${error.message}` });
  }
};
module.exports = dbConnection;
