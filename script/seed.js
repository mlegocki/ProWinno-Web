const mongoose = require('mongoose');
const { Postings } = require('../server/db/models');

// seed data
const postings = [
  {
    title: 'Associate Consultant',
    author: 'John Smith',
    description: 'We need a junior consultant to help a dying library to stay alive by maximizing profits and cutting costs',
    industry: 'Local Government',
    location: 'Boston',
    date: '04/05/2018'
  },
  {
    title: 'Musician',
    author: 'Lisa Smith',
    description: 'In search of a singer/guitarist for our band which is currently touring across the country',
    industry: 'Music',
    location: 'Chicago',
    date: '04/12/2018'
  },
  {
    title: 'Graphic Design Artist',
    author: 'Henry Koo',
    description: 'We need someone who is familiar with Photoshop to design new visuals for our website as well as rebranding logos for our campaign',
    industry: 'E-Commerce',
    location: 'Los Angeles',
    date: '03/28/2018'
  },
];

let resetDb = async () => {
  const ProWinno = await mongoose.connect('mongodb://localhost/ProWinno');
  await ProWinno.connection.dropCollection('postings');
  await Postings.create(postings);
}

resetDb();