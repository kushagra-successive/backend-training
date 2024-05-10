const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Assignment11");
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("Database not connected...");
  }
};
module.exports = connection;
