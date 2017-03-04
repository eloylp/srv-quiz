'use strict';

module.exports = class QuizListService {

    constructor(quizRepository) {

        this._quizRepository = quizRepository;
    }

    listQuiz() {

        return this._quizRepository.get();
    }
}