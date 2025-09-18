const express = require("express");
const router = express.Router();

const leftMenuController = require("../Controllers/leftmenucontroller");

// GET /api/menus
router.get("/getmenus", leftMenuController.getMenus);
router.get("/getmenus", leftMenuController.getMenus);

module.exports = router;
