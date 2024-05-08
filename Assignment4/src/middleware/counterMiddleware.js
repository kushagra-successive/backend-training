const counterMiddleware = (limit) => {
  const counterObj = {};
  return (req, res, next) => {
    // eslint-disable-next-line no-prototype-builtins

    // eslint-disable-next-line no-prototype-builtins
    counterObj.hasOwnProperty("count") ? null : (counterObj.count = 0);
    if (counterObj.count >= limit) {
      const customError = new Error();
      customError.status = 429;
      customError.message = "Too Many Requests";
      next(customError);
    } else counterObj.count++;
    console.log(counterObj.count);
    setTimeout(() => {
      delete counterObj.count;
    }, 5000);
    next();
  };
};
module.exports = counterMiddleware;
