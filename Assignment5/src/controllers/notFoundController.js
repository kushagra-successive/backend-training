const notFound = (req, res, next) => {
  try {
    throw new Error("Not Found");
  } catch (err) {
    err.status = 404;
    next(err);
  }
};
module.exports = notFound;
