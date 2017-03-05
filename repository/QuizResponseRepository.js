'use strict';

const QuizResponseMapperC = require("./QuizResponseMapper");

module.exports = class QuizResponseRepository {

    constructor(orm) {
        this._orm = orm
        this._mapper = new QuizResponseMapperC();
    }

    add(quizResponse) {

        return new Promise((resolve, reject) => {

            this._orm.create({
                "quiz_id": quizResponse.quizId,
                "quiz_response": quizResponse.quizResponse,
                "participant": quizResponse.participant,
                "is_valid": quizResponse.isValidResponse,
                "response_needed": quizResponse.responseNeeded
            }).then((quizResponseCreated) => {

                resolve(this._mapper.map(quizResponseCreated));

            }).catch((err) => {
                reject(err);
            });
        });
    }
}