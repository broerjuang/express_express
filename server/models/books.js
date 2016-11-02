'use strict'

const mongoose = require('mongoose');

const Book = new mongoose.Schema({
  id     : Number,
  title  : String,
  price  : Number
}, {
  timestamp : true
})

module.exports = mongoose.model('Book', Book)
