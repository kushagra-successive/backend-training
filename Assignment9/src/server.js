const express = require("express");
const app = express();
const router = require("./routes/userRouter");
const serverSetup = () => {
  app.use(express.json());
  app.use(router);
  return app;
};
module.exports = serverSetup;
