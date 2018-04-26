const router = require('express').Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Postings } = require('../db/models')

// returns all documents (array form)
router.get('/', (req, res, next) => {
  console.log(req.query)
  const { search } = req.query;
  if (search) {
    let query = new RegExp(search, 'i');
    Postings.find({ title: query }, (err, postings) => {
      res.send(postings)
    })
  } else {
    Postings.find((err, postings) => {
      res.send(postings)
    })
  }
})

// returns a single document (object form)
router.get('/:postingId', (req, res, next) => {
  const { postingId } = req.params
  Postings.findById(postingId, (error, posting) =>
    res.send(posting))
    .catch(next);
})

// returns the newly created document (object form)
router.post('/', (req, res, next) => {
  let newPosting = new Postings(req.body);
  newPosting.save();
  res.send(newPosting);
})


router.put('/:postingId', (req, res, next) => {
  let postingId = req.params.postingId;
  Postings.findByIdAndUpdate(postingId, req.body, { new: true }, (err, updatedPosting) => {
    console.log(updatedPosting);
    res.send(updatedPosting);
  })
})

module.exports = router;