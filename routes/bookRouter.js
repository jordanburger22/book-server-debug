const express = require('express');
const bookRouter = express.Router();
const setBookCode = require('../middleware/setBookCode');
const {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
    addManyBooks
} = require('../controllers/bookController');


bookRouter.route('/')
    .get(getBooks)
    .post(setBookCode, addBook);

bookRouter.route('/:bookID')
    .put(updateBook)
    .delete(deleteBook);

bookRouter.route('/addMany')
    .post(setBookCode, addManyBooks);

module.exports = bookRouter;