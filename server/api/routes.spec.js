/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const app = require('../index')
const mongoose = require('mongoose');
const { Postings } = require('../db/models')

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

describe('Postings API routes', () => {
  let ProWinno;
  beforeEach(async () => {
    ProWinno = await mongoose.connect('mongodb://localhost/ProWinno');
    await ProWinno.connection.dropCollection('postings');
    await Postings.create(postings)
  })
  describe('/api/postings', () => {
    describe('GET requests', () => {
      it('GET /api/postings', () => {
        return request(app)
          .get('/api/postings')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body[0].title).to.be.a('string');
          })
      });
    })
    it('GET /api/postings/:postingId', () => {
      return request(app)
        .get('/api/postings/54ad6c3ae764de42070b27b1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.title).to.be.a('string');
          expect(res.body._id).to.equal('54ad6c3ae764de42070b27b1');
        })
    });
    describe('POST requests', () => {
      it('POST /api/postings', () => {
        return request(app)
          .post('/api/postings')
          .send({
            title: 'Dancer for hire',
            author: 'Jo-Ann Smeagle',
            description: 'Seeking an experienced hip-hop dancer',
            industry: 'Performing Arts',
            position: 'Lead Dancer',
            location: 'Denver',
            date: '04/16/2018'
          })
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object');
            expect(res.body.title).to.be.a('string');
          })
      });
    });
    describe('PUT requests', () => {
      it('PUT /api/postings', () => {
        return request(app)
          .put('/api/postings/54ad6c3ae764de42070b27b1')
          .send({
            title: 'Consultant in desperate need',
            author: 'John Smith',
            description: 'We need a Principal consultant',
            industry: 'Public Government',
            position: 'Consultant',
            location: 'Boston',
            date: '04/10/2018'
          }, )
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object');
            expect(res.body.title).to.be.a('string');
          })
      });
    });
  })
})
