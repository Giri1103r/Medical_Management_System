const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: String }, 
  dob: { type: Date }, 
  status: { type: Number, default: 1 }, 
  trash: { type: Boolean, default: false },
},
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
