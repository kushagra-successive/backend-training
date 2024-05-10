const express = require("express");
const router = require("../src/routes/userRouter");
const app = express();
const server = () => {
  app.use(express.json());
  app.use(router);
  return app;
};
module.exports = server;
