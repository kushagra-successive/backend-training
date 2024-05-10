const user = require("../models/mySchema");
const validate = async (req, res, next) => {
  try {
    const newDocument = new user(req.body);
    await newDocument.save();
    next();
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = validate;
