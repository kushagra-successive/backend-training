const Documents = require("../models/data");
const bcrypt = require("bcryptjs");
const signup = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userExist = await Documents.findOne({ email });
    if (userExist) {
      res.json({ message: "User Already Exist", userExist });
    } else {
      const { name, email, password } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const newDocument = new Documents({
        name,
        email,
        password: hash_password,
      });
      await newDocument.save();
      delete password;
      req.Docs = newDocument;
      next();
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = signup;
