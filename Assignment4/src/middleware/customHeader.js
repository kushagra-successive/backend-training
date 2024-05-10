const customHearder = (req, res, next) => {
  res.setHeader("X-myHeader", "Hii Middlewares");
  next();
};
module.exports = customHearder;
