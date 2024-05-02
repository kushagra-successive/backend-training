const express = require("express");
const createError = require("http-errors");
const { validate } = require("../middleware");
const { validateControl, promise } = require("../controllers");
const router = express.Router();
// // Internal Server Error (500): When an unexpected error occurs within the server.

router.get("/", (req, res, next) => {
  try {
    throw new Error("Not Found");
  } catch (err) {
    err.status = 404;
    next(err);
  }
});
// // Unauthorized (401): When a request requires authentication credentials that are missing or incorrect.
router.get("/protected-route", (req, res, next) => {
  if (!req.user) {
    next(createError(401, "Unauthorized"));
  } else {
    res.send(req.body.user);
  }
});
// // Bad Request (400): When the server cannot process the request due to invalid syntax.
router.post("/api/resource", (req, res, next) => {
  if (!req.body.name) {
    next(createError(400, "Bad Request: Name is required"));
  } else {
    res.send(req.body.name);
  }
});

router.get("/async", promise);
router.post("/validate", validate, validateControl);

module.exports = router;
