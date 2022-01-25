const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title required"]
    },
    price: {
        type: String,
        required: [true, "price required"]
    },
    description: {
        type: String,
        required: [true, "description required"]
    }
})
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product