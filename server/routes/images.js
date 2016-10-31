const express = require('express');
const router = express.Router();
const path = require('path');

const Image = require('../models/Image')

router.get('/search/:tag', (req, res) => {
  Image.find({tags: req.params.tag})
  .then(images => res.send(images))
  .catch(err => res.status(400).send(err))
})

router.put('/addtag/:id', (req, res) => {
  Image.findOneAndUpdate({ _id: req.params.id }, { $push: req.body }, { new: true })
  .then(image => res.send(image))

  .catch(err => res.status(400).send(err))
})

router.put('/removetag/:id', (req, res) => {
  Image.findOneAndUpdate({ _id: req.params.id }, { $pull: req.body }, { new: true })
  .then(image => res.send(image))
  .catch(err => res.status(400).send(err))
})

router.get('/:id', (req, res) => {
  Image.findById(req.params.id)
  .then(image => {
    res.sendFile(path.join(__dirname, `../../${image.path}`))
  })
  .catch(err => res.status(400).send(err))
})

router.delete('/:id', (req, res) => {
  Image.remove({ _id: req.params.id })
  .then( res.send('image deleted') )
  .catch(err => res.status(400).send(err))
})

router.get('/', (req, res) => {
  Image.find()
  .then(images => res.send(images))
  .catch(err => res.status(400).send(err))
})


module.exports = router;
