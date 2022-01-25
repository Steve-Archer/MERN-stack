const ProductController = require("../controllers/product.controller")
const Product = require("../models/product.model")

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts)
    app.post("/api/products/new", ProductController.createProduct)
}