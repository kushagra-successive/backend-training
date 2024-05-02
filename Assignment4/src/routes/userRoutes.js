const express = require("express");
const router = express.Router();
const {
  userController,
  customController,
  routeController,
} = require("../controllers");

const {
  customHeader,
  custom,
  createToken,
  middlewares,
  errorHandler,
  counterMiddleware,
} = require("../middleware");

const { middleware1, middleware2, middleware3 } = middlewares;

router.use(customHeader);
router.use(counterMiddleware(3));
router.post("/create", createToken, userController);
router.get("/chain", middleware1, middleware2, middleware3, routeController);
router.use(custom, customController);
router.use(errorHandler);

module.exports = router;
