const express = require("express");
const compression = require("compression");
const userRouter = require("./src/routes/user");
const postRouter = require("./src/routes/post");
const app = express();
const server = () => {
  app.use(express.json());
  app.use(compression());
  app.use("/v1", userRouter);
  app.use("/v1", postRouter);
  app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({ message: err.message });
  });
  return app;
};
module.exports = server;
