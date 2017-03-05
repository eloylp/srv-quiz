'use strict';


module.exports = class QuizRemoveService {

    constructor(quizRepository) {
        this._quizRepository = quizRepository;
    }

    remove(quiz) {

        return this._quizRepository.remove(quiz);
    }

    removeAll() {
        return this._quizRepository.removeAll();

    }
}
