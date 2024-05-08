const jwt = require("jsonwebtoken");
const createToken = (req, res, next) => {
  const payload = {
    name: "ShreeRam",
    email: "raghven999@gmail.com",
  };
  // eslint-disable-next-line no-undef
  req.token = jwt.sign(payload, process.env.JWT_SECRET);
  next();
};
module.exports = createToken;
