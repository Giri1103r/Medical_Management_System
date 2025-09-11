const User = require("../Models/users"); // import user model
const bcrypt = require("bcryptjs"); 
const { body, validationResult } = require("express-validator");

exports.store = async (req,res) =>{
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .run()

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
}