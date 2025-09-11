const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const loginRoutes = require("./Routes/loginroutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/register", loginRoutes);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
