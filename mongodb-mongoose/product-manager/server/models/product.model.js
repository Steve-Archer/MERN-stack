const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title required"]
    },
    price: {
        type: Number,
        required: [true, "price required"],
        min: [0, "Price must be more than 0."]
    },
    description: {
        type: String,
        required: [true, "description required"]
    }
})
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product