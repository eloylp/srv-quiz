'use strict';

module.exports = class Quiz {

    constructor(question, correctAnswers, tags) {

        this._id;
        this._question = question;
        this._correctAnswers = correctAnswers;
        this._tags = tags;
    }

    set id(id) {
        this._id = id;
    }

    set correctAnswers(correctAnswers) {
        this._correctAnswers = correctAnswers;
    }

    get id() {
        return this._id;
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

    toJSON() {

        return {
            "id": this.id,
            "question": this.question,
            "correctAnswers": this.correctAnswers,
            "tags": this.tags
        }
    }
}




