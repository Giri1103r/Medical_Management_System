const express = require("express");
const router = express.Router();

const leftMenuController = require("../Controllers/leftmenucontroller");

// GET /api/menus
router.get("/getmenus", leftMenuController.getMenus);
router.get("/getparentName", leftMenuController.getMenus);
router.get("/store", leftMenuController.store);

module.exports = router;
