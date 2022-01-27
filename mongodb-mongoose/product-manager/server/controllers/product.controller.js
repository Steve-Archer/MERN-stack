const Product = require("../models/product.model")

module.exports = {
    findAllProducts: (req, res) => {
        console.log("testing")
        Product.find()
            .then(allProducts =>{
                res.json({results: allProducts})
            })
            .catch(err => res.json({message: "Something went wrong", error: err}))
    },
    createProduct: (req, res) => {
        console.log("testing")
        Product.create(req.body)
            .then(newProduct =>{
                res.json({results: newProduct})
            })
            .catch(err => res.json({message: "Something went wrong", error: err}))
    },
    updateProduct: (req, res) => {
        console.log("testing")
        Product.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then(updatedProduct => {
            res.json({results: updatedProduct})
        })
        .catch(err => res.json({message: "something didnt work", error: err}))
    },
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then(oneProduct => {
                res.json({results: oneProduct})
            })
            .catch(err => res.json({message: "Something went wrong", error: err}))
    },
    deleteProduct: (req, res) => {
        console.log("testing")
        Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({result: result}))
        .catch(err => response.json(err))
    } 
}