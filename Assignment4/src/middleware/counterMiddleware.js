const counterMiddleware = (limit) => {
  const counterObj = {};
  return (req, res, next) => {
    counterObj.hasOwnProperty("count") ? null : (counterObj.count = 0);
    if (counterObj.count >= limit) {
      res.status(429).json({ error: "Too Many Requests" });
      return;
    } else counterObj.count++;

    console.log(counterObj.count);
    setTimeout(() => {
      delete counterObj.count;
    }, 5000);
    next();
  };
};
module.exports = counterMiddleware;
