const mongoose = require("mongoose");

const leftMenuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },   
  