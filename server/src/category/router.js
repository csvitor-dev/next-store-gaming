const { index } = require('./controller');
const express = require('express');

const router = express.Router();
/* GET home page. */
router.get('/', index);

module.exports = router;
