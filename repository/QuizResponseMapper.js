'use strict';

const QuizResponseC = require('./../domain/quizCheckService/QuizResponse');

module.exports = class QuizResponseMapper {

    map(quizResponse) {

        return new Promise((resolve, reject) => {

            if (Array.isArray(quizResponse)) {

                var mapping = [];
                for (let i = 0, length = quizResponse.length; i < length; i++) {

                    let mappedQuiz = new QuizResponseC(
                        quizResponse[i].quiz_id,
                        quizResponse[i].quiz_response,
                        quizResponse[i].participant
                    );
                    mappedQuiz.id = quizResponse[i].id;
                    mappedQuiz.isValidResponse = quizResponse[i].is_valid
                    mappedQuiz.responseNeeded = quizResponse[i].response_needed
                    mapping.push(mappedQuiz);
                }

            } else {
                var mapping = new QuizResponseC(
                    quizResponse.quiz_id,
                    quizResponse.quiz_response,
                    quizResponse.participant
                );
                mapping.id = quizResponse.id;
                mapping.isValidResponse = quizResponse.is_valid;
                mapping.responseNeeded = quizResponse.response_needed;
            }
            resolve(mapping);
        });
    }
}