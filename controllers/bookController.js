const Book = require('../models/book')


const getBooks = async(req, res, next) => {
    try {
        const books = await Book.find()
        return res.status(200).send(books)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}


const addBook = async(req, res, next) => {
    try {
        const newBook = new Book(req.body)
        const savedBook = await newBook.save()
        return res.status(201).send(savedBook)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}

const addManyBooks = async(req, res, next) => {
    try {
        const newBooks = req.body
        const savedBooks = await Book.insertMany(newBooks)
        return res.status(201).send(savedBooks)
    } catch (error) {
        res.status(500)
        return next(error)
    }
}

const updateBook = async(req, res, next) => {
    try {
        const { bookId } = req.params
        const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true })
        return res.status(200).send(updatedBook)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}

const deleteBook = async(req, res, next) => {
    try {
        const { id } = req.params
        const deletedBook = await Book.findByIdAndDelete(id)
        return res.status(200).send(deletedBook)
    } catch (err) {
        res.status(500)
        return next(err)
    }
}


module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
    addManyBooks
}