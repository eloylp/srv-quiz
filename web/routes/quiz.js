'use strict';

const express = require('express');
const router = express.Router();
let QuizControllerC = require('./../controller/quizController');
const QuizController = new QuizControllerC();

router.get('/', QuizController.get);
router.post('/', QuizController.add);

module.exports = router;
