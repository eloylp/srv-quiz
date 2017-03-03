'use strict';

module.exports = class QuizCheckResponse {

    constructor(isValidResponse, responseNeeded) {
        this._isValidResponse = isValidResponse
        this._responseNeeded = responseNeeded
    }

    get isValidResponse() {
        return this._isValidResponse;
    }

    get neededResponse() {
        return this._responseNeeded;
    }
}