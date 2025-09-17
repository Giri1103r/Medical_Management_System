const mongoose = require("mongoose");

const leftMenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  namekey: { type: String, required: true },   
  link: { type: String, required: true },   
  icon: { type: String, required: true },   
  parent_id: { type: int, required: true },   
  parent_id: { type: int, required: true },   
    status: { type: Number, default: 1 },