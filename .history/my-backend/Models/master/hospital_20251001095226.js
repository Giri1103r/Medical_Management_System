const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    hospital_auto_id :{type:String},
    hospital_name: { type: String, },
    status: { type: Number, default: 1 },
    trash: { type: Boolean, default: false },
},
    { timestamps: true },
);

module.exports = mongoose.model("master_hospital", hospitalSchema);