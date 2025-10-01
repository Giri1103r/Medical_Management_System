const mongoose = require("mongoose");

const specialization = new mongoose.Schema({
    name: { type: String, },
    status: { type: Number, default: 1 },
    trash: { type: Boolean, default: false },
},
    { timestamps: true },
);
module.exports = mongoose.model("master_specialization", specialization);
