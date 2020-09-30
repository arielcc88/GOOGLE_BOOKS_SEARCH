//importing mongoose to create Schema
const mongoose = require("mongoose");

//define Schema
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    authors: [{
        type: String,
        trim: true,
        required: "Author's name is required"
    }],
    description: {
        type: String,
        trim: false,
    },
    image: {
        type: String,
        trim: true,
    },
    link: {
        type: String,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
        required: "Book's title is required"
    },
});

const Book = mongoose.model("Book", BookSchema);
//export model
module.exports = Book;