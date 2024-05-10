const jwt = require("jsonwebtoken");
const verify = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.status(401).json({ message: "User Not Authenticated" });
  }
};

module.exports = verify;
