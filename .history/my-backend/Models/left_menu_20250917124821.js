const mongoose = require("mongoose");

const leftMenuSchema = new mongoose.Schema({
    name: { type: String, },
    namekey: { type: String, },
    link: { type: String, },
    icon: { type: String, },
    parent_id: { type: int, },
    is_parent: { type: int, },
    is_module: { type: int, },
    sort_order: { type: int, },
    permission: { type: String },
    modkey: { type: String },
    status: { type: Number, default: 1 },
    trash: { type: Boolean, default: false },
},
    { timestamps: true },
);

module.exports = mongoose.model("LeftMenu", leftMenuSchema);