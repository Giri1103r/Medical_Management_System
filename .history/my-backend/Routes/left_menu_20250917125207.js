const express = require("express");
const router = express.Router();

const leftMenuController = require("../Controllers/leftmenucontroller");

// GET /api/menus
router.get("api/menus", leftMenuController.getMenus);