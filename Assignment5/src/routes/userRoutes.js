const express = require("express");
const { validate } = require("../middleware");
const {
  validateControl,
  asyncRouteHandler,
  notFound,
  unAuthorized,
  badRequest,
} = require("../controllers");

const router = express.Router();
// NotFound(404):When page not found.
router.get("/", notFound);
//  Unauthorized (401): When a request requires authentication credentials that are missing or incorrect.
router.get("/protected-route", unAuthorized);
// Bad Request (400): When the server cannot process the request due to invalid syntax.
router.post("/api/resource", badRequest);
router.get("/async", asyncRouteHandler);
router.post("/validate", validate, validateControl);

module.exports = router;
