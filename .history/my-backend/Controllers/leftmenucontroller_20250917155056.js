const LeftMenu = require("../Models/left_menu");
const getMenus = async (req, res) => {
    try{
        const menus = await LeftMenu.find();
          console.log("Menus fetched from DB:", menus);
        res.status(200).json(menus);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
        }
    }
    module.exports = { getMenus }