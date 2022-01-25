const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required!"],
        minlength: [2, "First name must be at least 2 characters!"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required!"]
    },
    numBelts: {
        type: Number,
        required: [true, "Number of belts is required!"],
        min: [0, "Number of belts must be at least 0!"]
    },
    isVeteran: {
        type: Boolean
    }
})

//Here we are creating a variable "Ninja" which is going to represent the name of our table (collection). 
const Ninja = mongoose.model('Ninja', NinjaSchema); //mongoose is creating a table called "Ninja" using the instructions from "NinjaSchema"
module.exports = Ninja;