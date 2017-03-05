'use strict';


module.exports = class QuizUpdateService {

    constructor(quizRepository) {
        this._quizRepository = quizRepository;
    }

    update(quiz) {

        return this._quizRepository.update(quiz);

    }
}
