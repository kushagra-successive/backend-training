const Documents = require("../models/schema");
const userMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userExist = await Documents.findOne({ email, password });
    if (userExist && (userExist.role === "user" || userExist.role === "admin"))
      next();
    else res.status(404).json({ message: "Invalid Credentials" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = userMiddleware;
