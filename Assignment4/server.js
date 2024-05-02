const express = require("express");
const userRouter = require("./src/routes/userRoutes");
const app = express();
const serverSetUp = () => {
  app.use(userRouter);
  return app;
};

module.exports = serverSetUp;
