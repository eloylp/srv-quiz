'use strict';

module.exports = class QuizCheckService {

    constructor(quizRepository) {

        this._quizRepository = quizRepository;
    }

    checkQuiz(quiz) {

        return this._quizRepository.checkQuiz(quiz);
    }
}