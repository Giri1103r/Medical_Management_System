const LeftMenu = require("../Models/left_menu");
const getMenus = async (req, res) => {
    try{
        const menus await LeftMenu.find({
            trash: false,
            status: 1
        }).sort({ sort_order: 1 });
        res.status(200).json(menus);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
        })
    }