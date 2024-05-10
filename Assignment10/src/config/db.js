const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/tempdb`);
    console.log("Mongo Connected");
  } catch (error) {
    console.log("Error Occured: ", error.message);
  }
};
module.exports = connection;
