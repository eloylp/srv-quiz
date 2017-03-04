'use strict';

module.exports = class QuizCheckService {

    constructor(quizRepository) {

        this._quizRepository = quizRepository;
    }

    check(quiz) {

        return this._quizRepository.get(quiz);
    }
}