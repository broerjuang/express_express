'use strict'

//---------------------------
// Node Modules
//---------------------------

// Express Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initiate Express
const app = express();
const router = express.Router() ;

//---------------------------
//App Configuration
//---------------------------

// req.body
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cors());

const books = require('./data.js');

//---------------------------
// Route Configuration
//---------------------------


router.get('/books', (req, res) => {
  res.send(books)
});

router.post('/books', (req, res) => {
  let book = {
    id : Number(req.body.id),
    title : req.body.title,
    price : Number(req.body.price)
  }

  // push the book
  books.push(book)
  res.json(book)
})

// router.get('/books/:id', (req, res) => {
//   const book = books.filter(book => book.id === req.params.id)
// })[0]
//   res.json(book)
// })


router.delete('/books/:id', (req, res) => {
  // get book by id
  const book = books.filter(book => {return book.id === Number(req.params.id)})
  // delete the book by id
  books.splice(books.indexOf(book), 1)
  // send success message
  res.json({'message' : `Book ${id} has been deleted`});
})
//---------------------------
// Register Routes
//---------------------------

app.use('/', router) // better stay in the server.js

//---------------------------
// Run the app
//---------------------------


const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || '3000'

app.listen(port, () => {
  console.log('server is running on port ', port);
})
