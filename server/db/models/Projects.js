const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Projects = new Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: String
  }
});

module.exports = mongoose.model('projects', Projects);