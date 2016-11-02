'use strict'

// -----------------------------------------------------------------------------
// NODE MODULES
// -----------------------------------------------------------------------------

// Express dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');

// Initiate Express
const app = express()
const router = express.Router()

// -----------------------------------------------------------------------------
// APP MODULES
// -----------------------------------------------------------------------------

const apiBooks = require('./routes/api.books')

// -----------------------------------------------------------------------------
// APP CONFIGURATION
// -----------------------------------------------------------------------------

// Express
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


mongoose.

// -----------------------------------------------------------------------------
// REGISTER ROUTES
// -----------------------------------------------------------------------------

app.use('/api', apiBooks)

// -----------------------------------------------------------------------------
// RUN THE APP
// -----------------------------------------------------------------------------

const host = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, host, (err) => {
  if (err) console.log(err)
  console.log(`Server is running on ${host}:${port}`)
})
