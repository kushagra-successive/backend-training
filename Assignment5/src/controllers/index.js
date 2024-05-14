const validateControl = require("./validateControl");
const promise = require("./asyncController");
const notFound = require("./notFoundController");
const unAuthorized = require("./unAuthorizedController");
const badRequest = require("./badRequest");
module.exports = {
  validateControl,
  promise,
  notFound,
  unAuthorized,
  badRequest,
};
