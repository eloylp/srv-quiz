'use strict';

const express = require('express');
const router = express.Router();
let QuizControllerC = require('./../controller/quizController');
const QuizController = new QuizControllerC();

router.get('/', QuizController.getQuiz);

module.exports = router;
