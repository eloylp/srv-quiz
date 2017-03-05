'use strict';

const express = require('express');
const router = express.Router();
let QuizControllerC = require('./../controller/quizController');
const QuizController = new QuizControllerC();

router.get('/', QuizController.get);
router.get('/:id', QuizController.getById);
router.post('/', QuizController.add);
router.put('/:id', QuizController.update);
router.delete('/:id', QuizController.remove);
router.delete('/', QuizController.removeAll);

module.exports = router;
