'use strict';

const QuizResponseC = require('./../../domain/QuizResponse');

module.exports = class QuizResponseController {

    check(req, res, next) {

        let quizResponse = new QuizResponseC(
            req.body.quizId,
            req.body.quizResponse,
            req.body.participant
        );

        req.app.services.quizResponseService.check(quizResponse).then((quizResponseSaved) => {
            res.json(quizResponseSaved);

        }).catch((err) => {

            if (err.statusCode == 404) {
                res.status = err.statusCode;
                res.json({"message": "Not found"})
            } else {
                next(err);
            }
        });
    }
}

