const mongoose = require("mongoose");

const specializationSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: { type: String, },
    status: { type: Number, default: 1 },
    trash: { type: Boolean, default: false },
},
    { timestamps: true },
);
module.exports = mongoose.model("master_specialization", specializationSchema);
