const express = require("express");
const router = express.Router();

const hospitalController = require("../../Controllers/master/hospitalcontroller");


router.post("/store", hospitalController.store);
router.get("/list", hospitalController.index);
router.get("/gethospitalName", hospitalController.getHospitalName);
router.get("/:id", hospitalController.edit);
router.put("/update/:id", hospitalController.updates);
router.delete("/delete/:id", hospitalController.deletes);
router.get("/selectone/:id", hospitalController.selectone);
router.get("/view/:id", hospitalController.selectone);
router.post("/status/:id", hospitalController.status);
router.post("/uniqueness", hospitalController.unique);


module.exports = router;