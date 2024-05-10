const express = require("express");
const cookieParser = require("cookie-parser");
const mockList = require("./mockData");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());

app.get("/list", (req, res) => {
  res.json(mockList);
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
