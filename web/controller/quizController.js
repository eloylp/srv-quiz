'use strict';

const QuizC = require('./../../domain/quizAddService/Quiz');

module.exports = class QuizController {

    add(req, res, next) {

        let quiz = new QuizC(
            req.body.question,
            req.body.correctAnswers,
            req.body.tags
        );

        req.app.services.quizAddService.add(quiz).then((quiz) => {
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

        if (req.query.byTags && req.query.random) {
            req.app.services.quizListService.getByTagsRandomized(req.query.byTags).then(onSuccess).catch(onError);

        } else if (req.query.byTags) {
            req.app.services.quizListService.getByTags(req.query.byTags).then(onSuccess).catch(onError);

        } else if (req.query.random) {
            req.app.services.quizListService.getRandomized().then(onSuccess).catch(onError);

        } else {
            req.app.services.quizListService.getAll().then(onSuccess).catch(onError);
        }
    }
}

