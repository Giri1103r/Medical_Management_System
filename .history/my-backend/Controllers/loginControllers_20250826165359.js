const User = require("../Models/users"); // import user model
const bcrypt = require("bcryptjs"); 

exports.store = async (req,res)