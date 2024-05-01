const jwt = require("jsonwebtoken");

const secretKey = "mysecret";
const mockData = {
  id: 1,
  name: "AnyName",
};

module.exports = { secretKey, mockData };
