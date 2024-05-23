const express = require("express");
const app = express();
const userRouter = require("./src/routes/userRoutes");

const serverSetup = () => {
  app.use(express.json());
  app.use(userRouter);
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
  });
  return app;
};

module.exports = serverSetup;
