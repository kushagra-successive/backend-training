const express = require("express");
const userRouter = require("./src/routes/userRoutes");
const errorHandler = require("./src/middleware/errorHandler");
const app = express();
const serverSetUp = () => {
  app.use(userRouter);
  app.use(errorHandler);
  return app;
};

module.exports = serverSetUp;
