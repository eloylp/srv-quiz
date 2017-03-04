'use strict';

const express = require('express');
const router = express.Router();
let QuizCheckControllerC = require('./../controller/quizCheckController');
const QuizCheckController = new QuizCheckControllerC();

router.post('/', QuizCheckController.check);

module.exports = router;
