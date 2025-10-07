const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    department_auto_id: { type: String },
    department_name: { type: String, },
    hospital_id: {type: mongoose.Schema.Types.Mixed },
    status: { type: Number, default: 1 },
    trash: { type: Boolean, default: false },
},
    { timestamps: true },
);

module.exports = mongoose.model("master_department", departmentSchema);
