const User = require("../Models/users");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const store = async (req, res) => {
  // Run validations
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


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }



  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const authentication = async (req, res) => {
  await body("email").trim().notEmpty().withMessage("Email is Required").run(req);
  await body("password").trim().notEmpty().withMessage("password is required").run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);


    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid  password" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    console.log("USER Details", token);

    res.json({ token, user: { id: user._id, name: user.name } });
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

const update = async (req, res) => {
  await body("email").trim().notEmpty().withMessage("Email is Required").run(req);
  await body("name").trim().notEmpty().withMessage("Name is required").run(req);
  await body("phone_number").trim().notEmpty().withMessage("Phone Number is required").run(req);
  await body("gender").trim().notEmpty().withMessage("Gender is required").run(req);
  await body("gender").trim().notEmpty().withMessage("Gender is required").run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);


    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid  password" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    console.log("USER Details", token);

    res.json({ token, user: { id: user._id, name: user.name } });
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = { store, authentication }
