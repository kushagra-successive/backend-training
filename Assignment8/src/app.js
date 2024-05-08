const serverSetUp = require("./server");
const connectMongoDB = require("./config/db");
const seedDb = require("./helpers/seedDb");
const PORT = process.env.PORT || 4002;

connectMongoDB()
  .then(() => {
    seedDb();
    serverSetUp().listen(PORT, () => console.log("Server Started"));
  })
  .catch((error) => console.log("Mongo db connection failed", error));
