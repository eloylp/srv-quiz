'use strict';

module.exports = class QuizStatsService {

    constructor(correctAnswers, badAnswers, nonAskedQuiz) {

        this._correctAnswers = correctAnswers;
        this._badAnswers = badAnswers;
        this._nonAskedQuiz = nonAskedQuiz;
    }

    get correctAnswers() {
        return this._correctAnswers;
    }

    get badAnswers() {
        return this._badAnswers;
    }

    get nonAskedQuiz() {
        return this._nonAskedQuiz;
    }

}