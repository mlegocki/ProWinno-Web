const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  premium: {
    type: Boolean
  }
})

module.exports = mongoose.model('users', Users);