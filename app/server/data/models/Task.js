let mongoose = require("mongoose");

let requiredMessage = "{PATH} is required";

module.exports.init = function() {
    let taskSchema = mongoose.Schema({
        title: { type: String, required: requiredMessage },
        description: { type: String, required: requiredMessage },
        category: { type: String, required: requiredMessage },
        date: { type: Date, required: requiredMessage },
        creator: { type: String, required: requiredMessage }
    });

    let Task = mongoose.model("Task", taskSchema);
};

