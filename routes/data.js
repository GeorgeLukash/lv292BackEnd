const express = require('express');

const router = express.Router();
const contentData = require('../models/accordion.data');

/* GET users listing. */
router.get('/accordion', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.send(contentData);
});

module.exports = router;
