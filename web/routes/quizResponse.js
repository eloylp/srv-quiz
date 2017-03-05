'use strict';

const express = require('express');
const router = express.Router();
let QuizResponseControllerC = require('./../controller/quizResponseController');
const QuizResponseController = new QuizResponseControllerC();

router.post('/', QuizResponseController.check);

module.exports = router;
