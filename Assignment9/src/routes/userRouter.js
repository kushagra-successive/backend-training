const express = require("express");
const router = express.Router();
const createController = require("../controllers/userController");
const validate = require("../middleware/validateMiddleware");
router.post("/data", validate, createController);
module.exports = router;
