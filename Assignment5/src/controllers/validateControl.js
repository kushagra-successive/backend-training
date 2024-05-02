const validateControl = (req, res) => {
  res.send(req.query.name);
};

module.exports = validateControl;
