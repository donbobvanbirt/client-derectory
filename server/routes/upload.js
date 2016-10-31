const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/images' })

const Image = require('../models/Image')

router.post('/', upload.single('image'), function (req, res, next) {
  console.log('req.body:', req.body);
  let { file, body } = req;
  file.title = body.title;
  file.tags = body.tags;
  Image.create(file)
    .then(image => res.send(image))
    .catch(err => res.status(400).send(err))
  // res.status(200).send('success');
})

module.exports = router;
