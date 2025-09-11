const express = require("express");
const router = express.Router();
const loginController = require("..loginControllers/Controllers/loginControllers");

// POST /api/register
router.post("/", loginController.store);

module.exports = router;
