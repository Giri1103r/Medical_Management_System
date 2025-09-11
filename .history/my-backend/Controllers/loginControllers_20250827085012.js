const User = require("../Models/users");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

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
