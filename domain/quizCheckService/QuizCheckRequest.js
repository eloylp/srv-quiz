'use strict';

module.exports = class QuizCheckRequest {

    constructor(quizId, quizResponse) {
        this._quizId = quizId
        this._quizResponse = quizResponse
    }

    get quizId() {
        return this._quizId;
    }

    get quizResponse() {
        return this._quizResponse;
    }
}