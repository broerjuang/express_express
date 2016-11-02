const mongoose = require('mongoose');
const localMongose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  sureName    : String,
  userName    : String,
  mobile      : {
    type    : String,
    unique  : true
  },
  email       : {
    type    : String,
    required: true,
    unique  : true
  },
  password    : String,
  birthday    : String
}, {
  timestamp : true
})

UserSchema.plugin(localMongose)
module.exports = mongoose.Model('User', UserSchema)
