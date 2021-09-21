const router = require('express').Router();

const Plants = require('./plants-model');
const restricted = require('../auth/auth-middleware');

router.get('/', restricted, (req, res, next) => {
  Plants.getAll()
    .then(plants => {
      res.status(200).json(plants)
    })
    .catch(next)
});

router.post('/', restricted, (req, res, next) => {
  const plant = req.body;
  Plants.add(plant)
    .then(newPlant => {
      res.status(201).json(newPlant)
    })
    .catch(next);
});

module.exports = router