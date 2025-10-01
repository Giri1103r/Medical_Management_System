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
        await specialization.save();
        res.status(201).json({ message: "Specialization created successfully", specialization });
    } catch (error) {       

        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const index = async (req ,res)) =>{
    try{
        const specilization = await Specialization.find({
            trash: false}).sort({_id: -1});
        res.status(200).json(specilization);
    }catch(error){
        res.status(500).json({ message: "Server error", error: error.message
                
        })
    }
}