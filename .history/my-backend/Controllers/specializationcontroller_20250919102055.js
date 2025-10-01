const Specialization = require("../Models/specialization");
const { body, validationResult } = require("express-validator");

const store = async (req, res) => {
    await body("name").notEmpty().withMessage("Name is required").run(req);

    const errors = validationResult(req);       
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }   
    const { name } = req.body;

    try {   
        const specialization = new Specialization({ name });