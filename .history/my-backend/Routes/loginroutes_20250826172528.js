const express = require("express");
const router = express.Router();
const loginController = require("./Controllers/loginController");

// POST /api/register
router.post("/", loginController.store);

module.exports = router;
