const express = require("express");
const userMiddleware = require("../middleware/userMiddleware");
const userControl = require("../controllers/userController");
const adminControl = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");
const router = express.Router();
router.post("/user", userMiddleware, userControl);
router.post("/admin", adminMiddleware, adminControl);
module.exports = router;
