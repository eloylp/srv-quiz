'use strict';

module.exports = class Quiz {

    constructor(question, correctAnswers, tags) {

        this._question = question;
        this._correctAnswers = correctAnswers;
        this._tags = tags;
    }

    get question() {
        return this._question;
    }

    get correctAnswers() {
        return this._correctAnswers;
    }

    get tags() {
        return this._tags;
    }
}




