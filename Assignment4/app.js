const express = require("express");
const app = express();
const {
  userController,
  customController,
  routeController,
} = require("./src/controllers");

const {
  customHeader,
  custom,
  createToken,
  middlewares,
  errorHandler,
  counterMiddleware,
} = require("./src/middleware");

const { middleware1, middleware2, middleware3 } = middlewares;

app.use(customHeader);
app.use(counterMiddleware(3));
app.post("/create", createToken, userController);
app.use( custom, customController);
app.get("/", middleware1, middleware2, middleware3, routeController);
app.use(errorHandler);
app.listen(3001, () => console.log("Listening"));
