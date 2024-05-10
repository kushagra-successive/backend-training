const documents = require("../models/data");
const bcrypt = require("bcryptjs");
const auth = async (req, res, next) => {
  const { email, password } = req.body;
  const userExist = await documents.findOne({ email });
  try {
    if (!userExist) {
      res.status(400).json({ message: "Invalid user Credentials" });
    } else {
      const pass = await bcrypt.compare(password, userExist.password);
      if (pass) {
        req.body.userExist = userExist;
        next();
      } else {
        res.status(401).json({ message: "Invalid Password" });
      }
    }
  } catch (error) {
    res.status(500).json("Internal Error");
  }
};
module.exports = auth;
