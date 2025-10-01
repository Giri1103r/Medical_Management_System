const express = require("express");
const router = express.Router();

const departmentController = require("../../Controllers/master/departmentcontroller");


router.post("/store",departmentController.store);
router.get("/list", departmentController.index);
router.get("/:id", departmentController.edit);
router.put("/update/:id", departmentController.updates);
router.delete("/delete/:id", departmentController.deletes);
router.get("/selectone/:id", departmentController.selectone);
router.get("/view/:id", departmentController.selectone);
router.post("/status/:id", departmentController.status);
router.post("/uniqueness", departmentController.unique);

module.exports = router;