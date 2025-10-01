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

const index = async (req, res) => {
    try {
        const specilization = await Specialization.find({
            trash: false
        }).sort({ _id: -1 });
        res.status(200).json(specilization);
    } catch (error) {
        res.status(500).json({
            message: "Server error", error: error.message

        })
    }
}

const edit = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID in edit:", id);
        const specialization = await Specialization.findById(id);
        if (!specialization) {
            return res.status(404).json({ message: "Specialization not found" });
        }
        res.status(200).json(specialization);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}
const selectone = async (req, res) => {
    try {
        const { id } = req.params;
       
        const specialization = await Specialization.findById(id);
        if (!specialization) {
            return res.status(404).json({ message: "Specialization not found" });
        }

        res.status(200).json(specialization);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
const updates = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const specialization = await Specialization.findByIdAndUpdate(id, { name }, { new: true });
        if (!specialization) {
            return res.status(404).json({ message: "Specialization not found" });
        }
        res.status(200).json({ message: "Specialization updated successfully", specialization });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

const status = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; 

  
    const specialization = await Specialization.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!specialization) {
      return res.status(404).json({ message: "Specialization not found" });
    }

    res.status(200).json({
      msg: `Status updated to ${status === 1 ? "Active" : "Inactive"}`,
      specialization
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const deletes = async (req, res) => {
  try {
    const { id } = req.params;

    const specialization = await Specialization.findByIdAndUpdate(
      id,
      { status: 0, trash: true },   
      { new: true }                 
    );

    if (!specialization) {
      return res.status(404).json({ message: "Specialization not found" });
    }

    res.status(200).json({
      msg: "Deleted the Record From the List",
      specialization
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




module.exports = { store, index, edit, updates, selectone,status,deletes}