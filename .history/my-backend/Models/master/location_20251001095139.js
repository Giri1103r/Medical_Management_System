const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    location_auto_id :{type:st}
    location_name: { type: String, },
    status: { type: Number, default: 1 },
    trash: { type: Boolean, default: false },
},
    { timestamps: true },
);

module.exports = mongoose.model("master_location", locationSchema);