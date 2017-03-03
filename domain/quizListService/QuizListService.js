'use strict';

module.exports = class QuizListService {

    constructor(quizRepository) {

        this._quizRepository = quizRepository;
    }

    listQuiz(quiz) {

        return this._quizRepository.listQuiz();
    }
}