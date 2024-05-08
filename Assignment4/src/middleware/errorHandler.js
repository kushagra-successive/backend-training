/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const errorHandler = (err, _req, res, _next) => {
  res
    .status(err.status || 500)
    .json({ error: err.message || "Something went wrong" });
  process.exit(1);
};
module.exports = errorHandler;
