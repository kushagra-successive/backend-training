const document = require("../models/mySchema");
const validate = async (req, res, next) => {
  try {
    await document.create(req.body);
    next();
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = validate;
