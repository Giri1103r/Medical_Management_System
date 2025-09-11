const express = require("express");
const router = express.Router();
const loginController = require("../Controllers/loginControllers");

// POST /api/register
router.post("/register", loginController.store);


router.post("/login", loginController.authentication);

module.exports = router;
