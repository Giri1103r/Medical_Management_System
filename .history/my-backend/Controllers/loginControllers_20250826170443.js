const User = require("../Models/users"); // import user model
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

exports.store = async (req, res) => {
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
            .run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try{
      const { name , email , password } = req.body
    }catch (err){
        res.status(500).json({message:"Server Error"})
    }
}