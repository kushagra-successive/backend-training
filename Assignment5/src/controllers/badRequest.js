const createError = require("http-errors");

const badRequest = (req, res, next) => {
  if (!req.body.name) {
    next(createError(400, "Bad Request: Name is required"));
  } else {
    res.send(req.body.name);
  }
};
module.exports = badRequest;
