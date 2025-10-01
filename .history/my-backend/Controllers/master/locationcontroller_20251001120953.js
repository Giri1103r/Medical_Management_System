const Location = require('../../Models/master/location')
const { body, validationResult } = require("express-validator");

const store = async (req, res) => {
    await body("name").notEmpty().withMessage("Name is required").run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
        const locations = new Location({
            name,
        });

        await locations.save();
        res.status(201).json({
            message: "Location created successfully",
            locations,
        });
    } catch (error) {
        
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const index = async (req, res) => {
    try {
        const locations = await Location.find({
            trash: false
        }).sort({ _id: -1 });
        res.status(200).json(locations);
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
        const locations = await Location.findById(id);
        if (!locations) {
            return res.status(404).json({ message: "locations not found" });
        }
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}


const selectone = async (req, res) => {
    try {
        const { id } = req.params;

        const locations = await Location.findById(id);
        if (!locations) {
            return res.status(404).json({ message: "Location not found" });
        }

        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const updates = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const locations = await Location.findByIdAndUpdate(id, { name }, { new: true });
        if (!loations) {
            return res.status(404).json({ message: "Locations not found" });
        }
        res.status(200).json({ message: "Locations updated successfully", locations });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}



const status = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;


        const locations = await Location.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!locations) {
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
        res.status(500).json({ message: "Something went Wrong Please try again After some time", error: error.message });
    }
};



const unique = async (req, res) => {
    try {
        const { field, value,id} = req.query;

        const query = {  [field] :value};
      if(id){
        query._id ={$ne: id}
      }

        const exists = Specialization.exists(query);
        res.json({ exists: !!exists });
    } catch (errr) {
        res.json({ message: "Server Error" })
    }
}



module.exports = { store, index, edit, updates, selectone, status, deletes, unique }