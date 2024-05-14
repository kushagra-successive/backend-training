const createError = require("http-errors");

const unAuthorized = (req, res, next) => {
  if (!req.user) {
    next(createError(401, "Unauthorized"));
  } else {
    res.send(req.body.user);
  }
};
module.exports = unAuthorized;
