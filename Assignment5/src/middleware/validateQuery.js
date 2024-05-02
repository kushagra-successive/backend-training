const createError = require("http-errors");

const validateQuery = (req, res, next) => {
  const name = req.query.name;
  try {
    if (name.length < 4)
      next(createError(401, "Name must be at least 4 characters long"));
  } catch (error) {
    next(error);
  }
  next();
};
module.exports = validateQuery;
