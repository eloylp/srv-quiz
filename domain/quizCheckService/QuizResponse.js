'use strict';

module.exports = class QuizResponse {

    constructor(quizId, quizResponse, participant) {

        this._id;
        this._quizId = quizId;
        this._quizResponse = quizResponse
        this._participant = participant
        this._isValidResponse;
        this._responseNeeded;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
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

    set isValidResponse(isValidResponse) {
        this._isValidResponse = isValidResponse;
    }

    get isValidResponse() {
        return this._isValidResponse;
    }

    get responseNeeded() {
        return this._responseNeeded;
    }

    set responseNeeded(responseNeeded) {
        this._responseNeeded = responseNeeded;
    }

    toJSON() {
        return {
            "id": this.id,
            "quizId": this.quizId,
            "quizResponse": this.quizResponse,
            "participant": this.participant,
            "isValidResponse": this.isValidResponse,
            "responseNeeded": this.responseNeeded
        }
    }
}