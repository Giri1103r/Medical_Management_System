const express = require("express");
const router = express.Router();
const loginController = require("../Controllers/loginControllers");

// POST /api/register
router.post("/register", loginController.store);


router.post("/login", loginController.authentication);
router.post("/login", loginController.selectOne);

module.exports = router;
