'use strict';

module.exports = class Quiz {

    constructor(question, correctAnswers, tags) {

        this._question = this.question;
        this._correctAnswers = correctAnswers;
        this._tags = tags;
    }

    get question(question) {
        return this._question;
    }

    get correctAnswers(correctAnswers) {
        return this._correctAnswers;
    }

    get tags(tags) {
        return this._tags;
    }
}




