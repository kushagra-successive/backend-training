const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myDB");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Not Connected:", error.message);
  }
};

module.exports=connection;