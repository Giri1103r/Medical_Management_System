const LeftMenu = require("../Models/left_menu");
const { body, validationResult } = require("express-validator");

const getMenus = async (req, res) => {
    try {
        const menus = await LeftMenu.find();
        //   console.log("Menus fetched from DB:", menus);
        res.status(200).json(menus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getParentName = async (req, res) => {
    try {
        const parentNames = await LeftMenu.find().select('name _id'); // remove .get()
        res.status(200).json(parentNames);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const store = async (req, res) => {
    await body("name").trim().notEmpty().withMessage("Name is Required").run(req);
    await body('name_key').trim().notEmpty().withMessage('Name Key is Required').run(req);
    await body('link').trim().notEmpty().withMessage('link is Required').run(req);
    await body('icon').trim().notEmpty().withMessage('Icon is Required').run(req);
    await body('parent_id').trim().notEmpty().withMessage('Parent Id Required').run(req);
    await body('module_id').trim().notEmpty().withMessage('Module Id Required').run(req);
    await body('is_parent').trim().notEmpty().withMessage('Is Parent Required').run(req);
    await body('sort_order').trim().notEmpty().withMessage('Sort Order is Required').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, name_key, link, icon, parent_id, module_id, is_parent, sort_order } = req.body;   
        const newMenu = new LeftMenu({ name, namekey:name_key, link, icon, parent_id, module_id, is_parent, sort_order,modkey:'',status:1 });
        const savedMenu = await newMenu.save();
        res.status(201).json(savedMenu);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }


}


module.exports = { getMenus, getParentName }