const User = require("../Models/users"); // import user model
const bcrypt = require("bcryptjs"); 
const { body, validationResult } = require("express-validator");

exports.store = async (req,res) =>{
    .body("name"{
        .trim()
        .notEmpty()
    })
}