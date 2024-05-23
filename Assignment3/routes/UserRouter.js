const express = require("express");
const app = express();
const validUser = require("../middlewares/validUser");
const queryValidation = require("../middlewares/queryValidation");
const locationValidation = require("../middlewares/locationValidation");
const PORT = process.env.PORT || 3001;
const router = express.Router();
app.use(express.json());

router.post("/validate", validUser, (req, res) => {
  res.json({ message: "user validated 👍" });
});

router.post("/user", queryValidation, (req, res) => {
  res.json({ message: `user ${req.id} 👍` });
});

router.get("/profile", locationValidation, (req, res) => {
  res.json({ message: "user profile access" });
});

app.use(router);
app.listen(PORT, () => console.log("listening"));
