const errorHandler = (err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
module.exports = errorHandler;
