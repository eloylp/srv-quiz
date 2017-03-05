'use strict';

const QuizResponseC = require('./../../domain/quizCheckService/QuizResponse');
const QuizCheckServiceC = require('./../../domain/quizCheckService/QuizCheckService');

module.exports = class QuizCheckController {

    check(req, res, next) {

        let quizCheckService = new QuizCheckServiceC(
            req.app.repositories.quiz,
            req.app.repositories.quizResponse
        );

        let quizResponse = new QuizResponseC(
            req.body.quizId,
            req.body.quizResponse,
            req.body.participant
        );

        quizCheckService.check(quizResponse).then((quizResponseSaved) => {
            res.json(quizResponseSaved);

        }).catch((err) => {

            next(err);
        });
    }
}

