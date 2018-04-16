const mongoose = require('mongoose');
const { Projects } = require('../server/db/models');

// mongoose.connect('mongodb://localhost/ProWinno', (err) => {
//   mongoose.connection.db.dropCollection('projects');
// })


const projects = [
  {
    title: 'Consultant needed',
    author: 'John Smith',
    description: 'We need a junior consultant to help a dying library to stay alive by maximizing profits and cutting costs',
    industry: 'Local Government',
    position: 'Consultant',
    location: 'Boston'
    // date: '04/05/2018'
  },
  {
    title: 'Musician needed for band',
    author: 'Lisa Smith',
    description: 'In search of a singer/guitarist for our band which is currently touring across the country',
    industry: 'Music',
    position: 'Lead Vocalist',
    location: 'Chicago'
    // date: '04/12/2018'
  },
  {
    title: 'Graphic designer architect',
    author: 'Henry Koo',
    description: 'We need someone who is familiar with Photoshop to design new visuals for our website as well as rebranding logos for our campaign',
    industry: 'E-Commerce',
    position: 'Principal Graphic Designer',
    location: 'Los Angeles'
    // date: '03/28/2018'
  },
];

mongoose.connect('mongodb://localhost/ProWinno');

// Go through each movie
projects.map(data => {
  // Initialize a model with movie data
  const project = new Projects(data);
  // and save it into the database
  project.save();
});