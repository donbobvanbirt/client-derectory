require('dotenv').config({ silent: true });

const PORT = process.env.PORT || 8080;
const MONGODB_URI = 'mongodb://localhost/client-directory';

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

// MONGOOSE CONFIGURATION
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, err => {
  console.log(err || `MongoDB connected to ${MONGODB_URI}`)
});

const app = express();
const server = require('http').Server(app);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use((req, res, next) => {
  res.handle = (err, data) => res.status( err ? 400 : 200).send(err || data)
  next()
})

app.use('/api', require('./routes/api'));

// SERVER LISTEN
server.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
});
