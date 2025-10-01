const express = require("express");
const router = express.Router();

const specializationcontroller = require("../Controllers/specializationcontroller");

router.post("/store", specializationcontroller.store);
router.get("/list", specializationcontroller.index);

module.exports = router;
