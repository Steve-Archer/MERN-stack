const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products/new", ProductController.createProduct);
    app.put("/api/products/edit/:id", ProductController.updateProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}