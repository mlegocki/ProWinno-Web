const router = require('express').Router();
const { Projects } = require('../db/models/')

router.get('/', (req, res, next) => {
  Projects.find((err, projects) => res.send(projects))
})

module.exports = router;