const register = async (req, res) => {
  res.json({
    name: req.Docs.name,
    email: req.Docs.email,
    hash_password: req.Docs.password,
  });
};
module.exports = register;
