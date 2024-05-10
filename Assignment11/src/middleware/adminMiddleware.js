const Documents = require("../models/schema");
const adminMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userExist = await Documents.findOne({ email, password });
    if (userExist.role === "admin") next();
    else res.status(404).json({ message: "Only for Admin" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = adminMiddleware;
