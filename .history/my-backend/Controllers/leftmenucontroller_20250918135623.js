const LeftMenu = require("../Models/left_menu");
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
   await body('mod_key').trim().notEmpty().withMessage('Module is Required').run(req);

   await body('sort_order').trim().notEmpty().withMessage('Sort Order is Required').run(req);

}
   

module.exports = { getMenus, getParentName }