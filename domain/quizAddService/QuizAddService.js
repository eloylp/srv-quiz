'use strict';

module.exports = class QuizAddService {

    constructor(quizRepository) {

        this._quizRepository = quizRepository;
    }

    addQuiz(quiz) {

        return this._quizRepository.addQuiz(quiz);
    }
}