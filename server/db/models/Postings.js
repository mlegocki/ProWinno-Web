const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Postings = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  industry: {
    type: String
  },
  position: {
    type: String
  },
  location: {
    type: String
  },
  date: {
    type: Date
  }
});

module.exports = mongoose.model('postings', Postings);