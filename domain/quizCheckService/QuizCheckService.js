'use strict';

module.exports = class QuizCheckService {

    constructor(quizRepository, quizResponseRepository) {

        this._quizRepository = quizRepository;
        this._quizResponseRepository = quizResponseRepository
    }

    check(quizResponse) {

        return new Promise((resolve, reject) => {

            this._quizRepository.getById(quizResponse.quizId).then((quiz) => {

                quizResponse.isValidResponse = false;
                for (let i = 0, length = quiz.correctAnswers.length; i < length; i++) {

                    if (quizResponse.quizResponse == quiz.correctAnswers[i]) {
                        quizResponse.isValidResponse = true;
                    }
                }

                quizResponse.responseNeeded = quiz.correctAnswers;
                this._quizResponseRepository.add(quizResponse).then((quizRR) => {
                    resolve(quizRR);

                }).catch((err) => {
                    reject(err);
                });
            }).catch((err) => {
                reject(err);
            });
        });
    }
}