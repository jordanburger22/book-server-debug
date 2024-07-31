const Book = require('../models/book');

// The setBookCode middleware is designed to automatically assign a unique code to each book in a request before it gets processed by the rest of your application. 
// It works whether req.body contains a single book object or an array of book objects. 
// This code is used to uniquely identify each book, ensuring there are no duplicates in the database.

const Book = require('../models/book');

async function generateUniqueBookCode() {
    let bookCode;
    let unique = false;

    while (!unique) {
        bookCode = Math.floor(Math.random() * 1000000);
        const existingBook = await Book.findOne({ bookCode });

        if (!existingBook) {
            unique = true;
        }
    }

    return bookCode;
}

async function setBookCode(req, res, next) {
    try {
        if (Array.isArray(req.body)) {
            const booksWithCodes = Promise.all(req.body.map(async (book) => {
                book.bookCode = await generateUniqueBookCode();
                return book;
            }));
            req.body = booksWithCodes;
        } else {
            req.body.bookCode = await generateUniqueBookCode();
        }
        next();
    } catch (error) {
        res.status(500).send({ error: 'Failed to generate unique book code' });
    }
}

module.exports = setBookCode;