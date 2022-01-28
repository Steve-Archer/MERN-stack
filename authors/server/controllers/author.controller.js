const Author = require("../models/author.model")

module.exports = {
    findAllAuthors: (req, res) => {
        console.log("testing find")
        Author.find()
            .then(authors => {
            res.json({result: authors})
            })
            .catch(err => res.json({message: "Error, didn't work", error: err}))
    },
    findOneAuthor: (req, res) => {
        console.log("testing findOne")
        Author.findOne({_id: req.params.id})
            .then(author => {
                res.json({result: author})
            })
            .catch(err => res.json({message: "Error, didn't work", error: err}))
    },
    createAuthor: (req, res) => {
        console.log("testing create")
        Author.create(req.body)
            .then(newAuthor =>{
                res.json({result: newAuthor})
            })
            .catch(err => res.json({message: "Error, didn't work", error: err}))
    },
    updateAuthor: (req, res) => {
        console.log("testing update")
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true})
            .then(updatedAuthor => {
                res.json({result: updatedAuthor})
            })
            .catch(err => res.json({message: "Error, didn't work", error: err}))
    },
    deleteAuthor: (req, res) => {
        console.log("testing delete")
        Author.deleteOne({id: req.params.id})
            .then(result => 
                res.json({result: result}))
            .catch(err => res.json({message: "Error, didn't work", error: err}))
    }
}