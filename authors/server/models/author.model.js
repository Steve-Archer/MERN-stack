const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name required"],
        minlength: [3, "Name must be at least 3 letters long"]
    }
})
const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author
