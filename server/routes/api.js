const express = require('express');
const router = express.Router();

// router.use('/upload', require('./upload'));
router.use('/clients', require('./clients'));

module.exports = router;
