const res = require("express/lib/response");
const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message:"Error: Something went wrong", error: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(singleJoke => res.json({joke: singleJoke}))
        .catch(err => res.json({message:"Error: Something went wrong", error: err}))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message:"Error: Something went wrong", error: err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message:"Error: Something went wrong", error: err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message:"Error: Something went wrong", error: err}))
}

module.exports.randomJoke = (req, res) => {
    const getRandomJoke = (max) => {
        return Math.floor(Math.random() * max)
    }
    Joke.find()
        .then(allJokes =>{
            let randomNum = getRandomJoke(allJokes.length)
            res.json({results: allJokes[randomNum]})
        })
        .catch(err => res.json({message:"Error: Something went wrong", error: err}))
}