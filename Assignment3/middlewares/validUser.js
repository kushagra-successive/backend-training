const userSchema = require("../config/validationJoi");
const validUser = (req, res, next) => {
  console.log("validate");

  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
module.exports = validUser;
