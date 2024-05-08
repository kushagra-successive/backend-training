const Joi = require("joi");

const queryValidation = (req, res, next) => {
  const id = parseInt(req.query.id);
  const { error } = Joi.number().validate(id);
  if (error) {
    next(error);
  }
  req.id = id;
  next();
};
module.exports = queryValidation;
