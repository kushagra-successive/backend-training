const loginControl = async (req, res) => {
  res.json({
    message: "Login Success",
    email: req.body.email,
    password: req.body.password,
    token: await req.body.userExist.generateToken({
      email: req.body.email,
      password: req.body.password,
    }),
  });
};
module.exports = loginControl;
