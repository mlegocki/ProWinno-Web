/* global describe beforeEach it */

const { expect } = require('chai')
const mongoose = require('mongoose')
const { Postings } = require('./')

const postings = [
  {
    title: 'Consultant needed',
    author: 'John Smith',
    description: 'We need a junior consultant to help a dying library to stay alive by maximizing profits and cutting costs',
    industry: 'Local Government',
    position: 'Consultant',
    location: 'Boston',
    date: '04/05/2018'
  },
  {
    title: 'Musician needed for band',
    author: 'Lisa Smith',
    description: 'In search of a singer/guitarist for our band which is currently touring across the country',
    industry: 'Music',
    position: 'Lead Vocalist',
    location: 'Chicago',
    date: '04/12/2018'
  },
  {
    title: 'Graphic designer architect',
    author: 'Henry Koo',
    description: 'We need someone who is familiar with Photoshop to design new visuals for our website as well as rebranding logos for our campaign',
    industry: 'E-Commerce',
    position: 'Principal Graphic Designer',
    location: 'Los Angeles',
    date: '03/28/2018'
  },
];

describe('Postings model', () => {
  let firstPosting;
  let ProWinno
  beforeEach(async () => {
    ProWinno = await mongoose.connect('mongodb://localhost/ProWinno');
    await ProWinno.connection.dropCollection('postings');
    return Postings.create(postings)
      .then((newPostings) => {
        firstPosting = newPostings[0];
      })
  })
  describe('model instance', () => {
    describe("correct attribute settings", () => {
      it("The 'title' is a string", () => {
        expect(firstPosting['title']).to.be.a('string')
      })
      it("the instance has 9 attributes", () => {
        expect(Object.keys(firstPosting.toJSON()).length).to.equal(9);
      })
    })
  })
})
