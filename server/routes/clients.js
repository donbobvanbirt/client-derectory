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
  // console.log('req.query', req.query)
  let { query } = req;

  let pagesize = parseInt(query.pagesize) || 20;
  let page = parseInt(query.page) || 0;
  let minage = parseInt(query.minage) || 0;
  let maxage = parseInt(query.maxage) || 120;


  delete query.pagesize;
  delete query.page;
  delete query.minage;
  delete query.maxage;

  Client.find(query)
  .where({'age': {$lt: maxage}, 'age': {$gt: minage}})
  .skip(page * pagesize)
  .limit(pagesize)
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
