const mongoose = require('mongoose');
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup required"],
        minlength: [5, "Setup must be at least five characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline required"],
        minlength: [5, "Punchline must be at least five characters"]
    }
})
const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;