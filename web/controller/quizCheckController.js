'use strict';

const QuizResponseC = require('./../../domain/quizCheckService/QuizResponse');

module.exports = class QuizCheckController {

    check(req, res, next) {

        let quizResponse = new QuizResponseC(
            req.body.quizId,
            req.body.quizResponse,
            req.body.participant
        );

        req.app.services.quizCheckService.check(quizResponse).then((quizResponseSaved) => {
            res.json(quizResponseSaved);

        }).catch((err) => {

            next(err);
        });
    }
}

