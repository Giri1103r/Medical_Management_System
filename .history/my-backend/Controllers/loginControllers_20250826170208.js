const User = require("../Models/users"); // import user model
const bcrypt = require("bcryptjs"); 
const { body, validationResult } = require("express-validator");

exports.store = async (req,res) =>{
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .run(req)

  body("email")
    .isEmail()
    .withMessage("Valid email is required")
    .run(req),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .run(req),

    const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.store = async (req, res) => {
  // ✅ Run validations directly inside store
  await body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .run(req);

  await body("email")
    .isEmail()
    .withMessage("Valid email is required")
    .run(req);

  await body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .run(req);

  // collect validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "⚠️ Email already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "✅ User registered successfully" });
  } catch (err) {
    console.error("❌ Error in register:", err);
    res.status(500).json({ message: "Server error" });
  }
};

}