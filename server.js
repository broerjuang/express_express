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
