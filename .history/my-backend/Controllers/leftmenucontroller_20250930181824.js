const LeftMenu = require("../Models/left_menu");
const { body, validationResult } = require("express-validator");

const getMenus = async (req, res) => {
    try {
        const menus = await LeftMenu.find({
            status: 1,
        });

        res.status(200).json(menus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getParentName = async (req, res) => {
    try {
        const parentNames = await LeftMenu.find().where('is_parent').equals(1).select('name _id');
        res.status(200).json(parentNames);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const index = async (req, res) => {
    try {
        const leftmeuns = await LeftMenu.find({
            trash: false
        }).sort({ _id: -1 });
        res.status(200).json(leftmeuns);
    } catch (error) {
        res.status(500).json({
            message: "Server error", error: error.message

        })
    }
}


const store = async (req, res) => {
    await body("name").trim().notEmpty().withMessage("Name is Required").run(req);
    await body('name_key').trim().notEmpty().withMessage('Name Key is Required').run(req);
    await body('icon').trim().notEmpty().withMessage('Icon is Required').run(req);
    await body('module_id').trim().notEmpty().withMessage('Module Id Required').run(req);
    await body('is_parent').trim().notEmpty().withMessage('Is Parent Required').run(req);
    await body('sort_order').trim().notEmpty().withMessage('Sort Order is Required').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, name_key, link, icon, parent_id, module_id, is_parent, sort_order, mod_key, permission } = req.body;

        const newMenu = new LeftMenu({
            name,
            namekey: name_key,
            link,
            icon,
            parent_id,
            is_module: module_id,
            is_parent,
            sort_order,
            modkey: mod_key,
            permission
        });
        await newMenu.save();
        res.status(201).json({
            message: "Left Menu created successfully",
            newMenu,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }


}


    const status = async (req, res) => {
        try {
            const { id } = req.params;
            const { status } = req.body;


            const LeftMenu = await LeftMenu.findByIdAndUpdate(
                id,
                { status },
                { new: true }
            );

            if (!LeftMenu) {
                return res.status(404).json({ message: "Left not found" });
            }

            res.status(200).json({
                msg: `Status updated to ${status === 1 ? "Active" : "Inactive"}`,
                LeftMenu
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error", error: error.message });
        }
    }

module.exports = { getMenus, getParentName, store, index,status }