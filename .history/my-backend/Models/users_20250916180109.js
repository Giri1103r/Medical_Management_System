const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile: { type: String }, // optional, can add validation if needed
  dob: { type: Date }, // Date of Birth
  status: { type: Number, default: 1 }, // default status
  trash: { type: Boolean, default: false },
  {timestamps}
});

module.exports = mongoose.model("User", userSchema);
