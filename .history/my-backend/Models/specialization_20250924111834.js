const mongoose = require("mongoose");
const specialization = new Specialization({ 
    _id: new mongoose.Types.ObjectId(), 
    name 
});
await specialization.save();
