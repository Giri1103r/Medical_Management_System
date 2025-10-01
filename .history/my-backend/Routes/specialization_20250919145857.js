const express = require("express");
const router = express.Router();

const specializationcontroller = require("../Controllers/specializationcontroller");

router.post("/specialization", specializationcontroller.store);

module.exports = router;
