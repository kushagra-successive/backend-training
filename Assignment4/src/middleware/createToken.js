const jwt = require("jsonwebtoken");
const {secretKey}=require('../utils/helperFunction');
const createToken = (req, res, next) => {
  const payload = {
    name: "ShreeRam",
    email: "raghven999@gmail.com",
  };
  req.token = jwt.sign(payload, secretKey);
  next();
};
module.exports = createToken;
