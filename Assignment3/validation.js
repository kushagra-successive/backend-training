const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
// Middleware to validate request body using Joi schema
const validateBody = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

app.post("/users", validateBody, (req, res) => {
  res.status(200).json({ message: "User created successfully" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
