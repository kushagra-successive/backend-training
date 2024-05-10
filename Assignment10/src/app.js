require("dotenv").config({ path: "./.env" });
const serverSetUp = require("./server");
const mongodb = require("./config/db");
const PORT = process.env.PORT || 4000;
mongodb()
  .then(() => {
    serverSetUp().listen(PORT, () => console.log("Running at:", PORT));
  })
  .catch((err) => console.log("Promise Failed", err.message));
