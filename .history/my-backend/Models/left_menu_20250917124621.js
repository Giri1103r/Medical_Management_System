const mongoose = require("mongoose");

const leftMenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  namekey: { type: String, required: true },   
  link: { type: String, required: true },   
  icon: { type: String, required: true },   
  parent_id: { type: int, required: true },   
  is_parent: { type: int, required: true },   
  is_module: { type: int, required: true },   
  permission: { type: String },   
  permission: { type: String },   
    status: { type: Number, default: 1 },