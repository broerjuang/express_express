const books = require('../data/books.js')

// data with mongoose Model
const Book = require('../models/books');

// -----------------------------------------------------------------------------
// CONTROLLING
// -----------------------------------------------------------------------------

module.exports = {
  /*
    PING
  */
  ping: (req, res) => {
    res.json({ 'message': 'PONG!' })
  },

  /*
    GET
    api/books
  */
  getBooks: (req, res) => {
    //res.json(books)
    Book.find({}, (data) => {
      res.send(data)
    })
  },

  /*
    POST
    api/books
  */
  postBooks: (req, res) => {
    const book = {
      id: Number(req.body.id),
      title: req.body.title,
      price: Number(req.body.price)
    }
    // books.push(book)
    Book.create(book, (err, data) => {
      err? res.send(data) : res.json(data)
    })
    //res.json(book)
  },

  /*
    GET
    api/books/:id
  */
  getBookById: (req, res) => {
    // const book = books.filter(book => {
    //   return book.id === Number(req.params.id)
    // })[0]
    // if (!book) res.status(404).json({ 'message': "No book found" })
    // res.status(200).json(book)
    Book.findOne({
      id : req.params.id
    }, (err, data) => {
      err ? res.status(400).json({'error' : `Error : ${err}`}) :
      res.status(200).json(data);
    })
  },

  /*
    DELETE
    api/books/:id
  */
  deleteBookById: (req, res) => {
    // get book by id
    //const book = books.filter(book => {
    //   return book.id === Number(req.params.id)
    // })[0]
    // if (!book) res.status(404).json({ 'message': "No book found" })
    //   // delete the book by id from array of book
    // books.splice(books.indexOf(book), 1)
    // res.status(200).json({ 'message': `Book ${req.params.id} has been deleted` })
    Book.findOndeAndRemove({
      id : req.params.id
    }, (err, data) => {
      err ? res.status(400).json({'error' : `Error : ${err}`}) :
      res.status(200).json(data);

    })
  },

  /*
    PUT
    api/books/:id
  */
  updateBookById: (req, res) => {
    const book = books.filter(book => {
      return book.id == req.params.id
    })[0]
    if (!book) res.status(404).json({ message: "No book found" })
    const index = books.indexOf(book)
    const keys = Object.keys(req.body)
    keys.forEach(key => {
      // book[key] = req.body[key]
      book.id = Number(req.body.id)
      book.name = req.body.name
      book.price = Number(req.body.price)
    })
    books[index] = book
    res.json(book)
  }

}
