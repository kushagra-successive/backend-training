const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017`);
    console.log("MongoDb Connected");
  } catch (error) {
    console.error("MONGODB connection error: ", error);
  }
};
module.exports = connection;
