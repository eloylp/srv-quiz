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

        let onSuccess = (quizes) => {
            res.json(quizes)
        }
        let onError = (err) => {
            next(err);
        }

        let quizListService = new QuizListServiceC(req.app.repositories.quiz);

        if (req.query.byTags && req.query.random) {
            quizListService.getByTagsRandomized(req.query.byTags).then(onSuccess).catch(onError);

        } else if (req.query.byTags) {
            quizListService.getByTags(req.query.byTags).then(onSuccess).catch(onError);

        } else if (req.query.random) {
            quizListService.getRandomized().then(onSuccess).catch(onError);

        } else {
            quizListService.getAll().then(onSuccess).catch(onError);
        }
    }
}

