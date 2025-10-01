const express = require("express");
const router = express.Router();

const specializationcontroller = require("../Controllers/specializationcontroller");
const auth = require('')

router.post("/store", specializationcontroller.store);
router.get("/list", specializationcontroller.index);
router.get("/:id", specializationcontroller.edit);
router.put("/update/:id", specializationcontroller.updates);
router.delete("/delete/:id", specializationcontroller.deletes);
router.get("/selectone/:id", specializationcontroller.selectone);
router.get("/view/:id", specializationcontroller.selectone);
router.post("/status/:id", specializationcontroller.status);
router.post("/uniqueness", specializationcontroller.unique);

module.exports = router;
