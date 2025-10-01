const mongoose = require("mongoose");

const leftMenuSchema = new mongoose.Schema({
    name: { type: String, },
    namekey: { type: String, },
    link: { type: String, },
    icon: { type: String, },
    parent_id: { type: mongoose.Schema.Types.Mixed, default: 0 },
    is_parent: { type: Number, },
    is_module: { type: Number, },
    sort_order: { type: Number, },
    permission: { type: String },
    modkey: { type: String },
    status: { type: Number, default: 1 },
    trash: { type: Boolean, default: false },
},
    { timestamps: true },
);

module.exports = mongoose.model("LeftMenu", leftMenuSchema);