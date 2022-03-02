const express = require('express');
//I need something from the express package in this file, so I require it above.

const feedController = require('../controllers/feed');

const router = express.Router();

//call the function to put on the page.
router.get('/professional', feedController.getData);

module.exports = router;