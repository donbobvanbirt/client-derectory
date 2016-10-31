const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
  title: String,
  tags: [ String ]
})

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
