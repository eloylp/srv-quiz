'use strict';

const QuizResponseC = require('./../domain/QuizResponse');

module.exports = class QuizResponseMapper {

    map(quizResponse) {

        return new Promise((resolve, reject) => {

            var fillOne = function (quizResponse) {

                var mapping = new QuizResponseC(
                    quizResponse.quiz_id,
                    quizResponse.quiz_response,
                    quizResponse.participant
                );
                mapping.id = quizResponse.id;
                mapping.isValidResponse = quizResponse.is_valid;
                mapping.responseNeeded = quizResponse.response_needed;
                return mapping;
            }

            if (Array.isArray(quizResponse)) {

                var mapping = [];
                for (let i = 0, length = quizResponse.length; i < length; i++) {

                    mapping.push(fillOne(quizResponse[i]));
                }

            } else {
                var mapping = fillOne(quizResponse);
            }
            resolve(mapping);
        });
    }
}