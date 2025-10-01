const express = require("express");
const router = express.Router();

const specializationcontroller = require("../Controllers/specializationcontroller");

router.post("/store", specializationcontroller.store);
router.get("/list", specializationcontroller.index);
router.get("/:id", specializationcontroller.edit);
router.put("/update/:id", specializationcontroller.updates);
router.get("/selectone/:id", specializationcontroller.selectone);
router.get("/view/:id", specializationcontroller.selectone);
router.post("/status/:id", specializationcontroller.status);

module.exports = router;
