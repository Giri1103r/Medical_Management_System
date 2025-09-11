const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController"); // adjust path if needed

// Route: POST /api/register
router.post("/", loginController.store);

module.exports = router;
