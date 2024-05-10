require("dotenv").config({
  path: "./Assignment9/.env",
});
const mongoDB = require("./config/server");
const serverSetup = require("./server");
const PORT = process.env.PORT || 4000;
mongoDB()
  .then(() => {
    serverSetup().listen(PORT, () => console.log(`listening at ${PORT}`));
  })
  .catch((err) => console.log(err.message));
