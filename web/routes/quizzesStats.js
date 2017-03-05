'use strict';

const express = require('express');
const router = express.Router();
let QuizStatsControllerC = require('./../controller/quizStatsController');
const QuizStatsController = new QuizStatsControllerC();

router.get('/', QuizStatsController.get);

module.exports = router;
