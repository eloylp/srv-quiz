'use strict';

const express = require('express');
const router = express.Router();

let indexController = require('./../controller/indexController')
const IndexController = new indexController();

/* GET home page. */
router.get('/', IndexController.getIndex);

module.exports = router;

