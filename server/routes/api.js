const express = require('express');
const router = express.Router();

router.use('/upload', require('./upload'));
router.use('/images', require('./images'));

module.exports = router;
