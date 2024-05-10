const verifyControl = (req, res) => {
  res.status(200).json({ message: "Access Granted" });
};
module.exports = verifyControl;
