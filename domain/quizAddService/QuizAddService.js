'use strict';

module.exports = class QuizAddService {

    constructor(quizRepository) {

        this._quizRepository = quizRepository;
    }

    add(quiz) {

        return this._quizRepository.add(quiz);
    }
}