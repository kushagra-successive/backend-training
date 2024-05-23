const mockData = require("../utils/helperFunction");
const jwt = require("jsonwebtoken");

const userController = (req, res) => {
  // eslint-disable-next-line no-undef
  const isValid = jwt.verify(req.token, process.env.JWT_SECRET);
  if (isValid) {
    res.json(mockData);
  } else {
    res.status.json({ message: "Not Authenticated" });
  }
};
module.exports = userController;
