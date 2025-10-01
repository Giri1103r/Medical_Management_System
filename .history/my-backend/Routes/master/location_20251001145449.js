const express = require("express");
const router = express.Router();

const locationController = require("../../Controllers/master/locationcontroller");


router.post("/store",locationController.store);
router.get("/list", locationController.index);
router.get("/:id", locationController.edit);
router.get("/getLocationName", locationController.edit);
router.put("/update/:id", locationController.updates);
router.delete("/delete/:id", locationController.deletes);
router.get("/selectone/:id", locationController.selectone);
router.get("/view/:id", locationController.selectone);
router.post("/status/:id", locationController.status);
router.post("/uniqueness", locationController.unique);

module.exports = router;
