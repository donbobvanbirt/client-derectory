const express = require('express');
const router = express.Router();
const path = require('path');

const Client = require('../models/Client')

// retrieve client by id
router.get('/:id', (req, res) => {
  Client.findById(req.params.id)
  .then(client => res.send(client))
  .catch(err => res.status(400).send(err))
})

// delete specified client
router.delete('/:id', (req, res) => {
  Client.remove({ _id: req.params.id })
  .then( res.send('client deleted') )
  .catch(err => res.status(400).send(err))
})

// edit specified client
router.put('/:id', (req, res) => {
  Client.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
  .then(client => res.send(client))
  .catch(err => res.status(400).send(err))
})

// retrive all clients
router.get('/', (req, res) => {
  Client.find()
  .then(clients => res.send(clients))
  .catch(err => res.status(400).send(err))
})

// create client
router.post('/', (req, res) => {
  Client.create(req.body)
  .then(client => res.send(client))
  .catch(err => res.status(400).send(err))
})


module.exports = router;
