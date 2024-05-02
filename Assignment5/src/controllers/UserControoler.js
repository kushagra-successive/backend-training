const { secretKey, mockData } = require("../utils/helperFunction");
const jwt = require("jsonwebtoken");

const userController = (req, res) => {
  const check = jwt.verify(req.token, secretKey);
  if (check) {
    res.json(mockData);
  } else {
    res.status.json({ message: "Not Authenticated" });
  }
};
module.exports = userController;
