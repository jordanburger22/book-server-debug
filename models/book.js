const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    bookCode: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema)