const express = require("express");
const router = express.Router();
const loginController = require("../Controllers/loginControllers");

// POST /api/register
router.post("//api/register", loginController.store);

module.exports = router;
