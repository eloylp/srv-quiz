'use strict';

module.exports = class Quiz {

    constructor(question, correctAnswers, tags) {

        this._question = this.question;
        this._correctAnswers = correctAnswers;
        this._tags = tags;
    }

    set question(question) {
        this._question = question
    }

    set correctAnswers(correctAnswers) {
        this._correctAnswers = correctAnswers;
    }

    set tags(tags) {
        this._tags = tags;
    }
}




