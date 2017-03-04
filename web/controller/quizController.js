'use strict';

const QuizC = require('./../../domain/quizAddService/Quiz');
const QuizAddServiceC = require('./../../domain/quizAddService/QuizAddService');
const QuizListServiceC = require('./../../domain/quizListService/QuizListService');

module.exports = class QuizController {

    add(req, res, next) {

        let quizAddService = new QuizAddServiceC(req.app.repositories.quiz);
        let quiz = new QuizC(
            req.body.question,
            req.body.correctAnswers,
            req.body.tags
        );

        quizAddService.add(quiz).then((quiz) => {
            res.json(quiz);

        }).catch((err) => {

            next(err);
        });
    }

    get(req, res, next) {
        res.send('quiz');
    }
}

