const Specialization = require("../Models/specialization");
const { body, validationResult } = require("express-validator");

const store = async (req, res) => {
    await body("name").notEmpty().withMessage("Name is required").run(req);