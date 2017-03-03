'use strict';

const express = require('express');
const router = express.Router();

let IndexControllerC = require('./../controller/indexController')
const IndexController = new IndexControllerC();

/* GET home page. */
router.get('/', IndexController.getIndex);

module.exports = router;

