const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const loginRoutes = require("./Routes/loginroutes");
const
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/user", loginRoutes);
app.use("./api/menus", left);
// app.use("/users/others/", loginRoutes);
// MongoDB Connection


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));


// Test route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
