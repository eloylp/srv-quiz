'use strict';

const QuizC = require('./../../domain/Quiz');

module.exports = class QuizController {

    add(req, res, next) {

        var quiz = [];

        let fillOne = function (quiz) {

            return new QuizC(
                quiz.question,
                quiz.correctAnswers,
                quiz.tags
            );
        }

        new Promise((resolve, reject) => {

            if (Array.isArray(req.body)) {

                for (let i = 0, length = req.body.length; i < length; i++) {
                    quiz.push(fillOne(req.body[i]));
                }

            } else {
                quiz = fillOne(req.body)
            }

            resolve(quiz);

        }).then((quiz) => {

            req.app.services.quizAddService.add(quiz).then((quiz) => {
                res.json(quiz);

            }).catch((err) => {

                next(err);
            });
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

    update(req, res, next) {

        let update = new QuizC(
            null,
            req.body.correctAnswers,
            req.body.tags
        );

        update.id = req.params.id;

        req.app.services.quizUpdateService.update(update).then((updatedQuiz) => {

            res.json(updatedQuiz);

        }).catch((err) => {
            next(err);
        })

    }

    remove(req, res, next) {

        let remove = new QuizC(null, null, null);

        remove.id = req.params.id;

        req.app.services.quizRemoveService.remove(remove).then((removedQuiz) => {

            res.json(removedQuiz);

        }).catch((err) => {
            next(err);
        })

    }

    removeAll(req, res, next) {

        req.app.services.quizRemoveService.removeAll().then((result) => {
            res.json(result);
        }).catch((err) => {
            next(err);
        });
    }
}

