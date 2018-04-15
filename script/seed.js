const mongoose = require('mongoose');
const Projects = require('./db/models/projects');

const projects = [
  {
    name: 'Consultant needed',
    author: 'John Smith',
    date: '04/05/2018'
  },
  {
    name: 'Musician needed for band',
    author: 'Lisa Smith',
    date: '04/12/2018'
  },
  {
    name: 'Graphic Designer architect',
    author: 'Henry Koo',
    date: '03/28/2018'
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ProWinno');

// Go through each movie
projects.map(data => {
  // Initialize a model with movie data
  const project = new Projects(data);
  // and save it into the database
  project.save();
});