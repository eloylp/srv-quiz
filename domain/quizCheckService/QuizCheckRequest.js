'use strict';

module.exports = class QuizCheckRequest {

    constructor(quizId, quizResponse, participant) {
        this._quizId = quizId
        this._quizResponse = quizResponse
        this._participant = participant
    }

    get quizId() {
        return this._quizId;
    }

    get quizResponse() {
        return this._quizResponse;
    }

    get participant() {
        return this._participant;
    }
}