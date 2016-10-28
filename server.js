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
const router = app.Router() ;

//---------------------------
//App Configuration
//---------------------------

// req.body
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cors());

const data = require('./data.json');
