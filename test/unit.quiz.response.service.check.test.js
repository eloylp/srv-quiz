'use strict';

var assert = require('assert');
var QuizResponseServiceC = require('./../domain/quizResponseService/QuizResponseService');
var QuizResponseC = require('./../domain/QuizResponse');
var QuizC = require('./../domain/Quiz');

var quizRepositoryMock = {
    getById: function (id) {

        return new Promise((resolve) => {
            let quiz = new QuizC("question", ['yes', 'yes please'], ['tag1', 'tag2']);
            quiz.id = 'af1234';
            resolve(quiz);
        });
    }
}

var quizResponseRepositoryMock = {
    add: function (quizResponse) {

        return new Promise((resolve) => {
            resolve(quizResponse);
        });
    }
}

describe('QuizResponseService.check', function () {

    it('Should return a validated response succeeded.', function (done) {

        let quizResponseService = new QuizResponseServiceC(quizRepositoryMock, quizResponseRepositoryMock);
        let quizResponse = new QuizResponseC('af1234', 'yes', 'tester');

        quizResponseService.check(quizResponse).then((response) => {
            assert.equal(response.isValidResponse, true);
            done();
        })
    });

    it('Should return a validated response succeeded, second true option.', function (done) {

        let quizResponseService = new QuizResponseServiceC(quizRepositoryMock, quizResponseRepositoryMock);
        let quizResponse = new QuizResponseC('af1234', 'yes please', 'tester');

        quizResponseService.check(quizResponse).then((response) => {
            assert.equal(response.isValidResponse, true);
            done();
        })
    });

    it('Should return a non validated response due to bad response.', function (done) {

        let quizResponseService = new QuizResponseServiceC(quizRepositoryMock, quizResponseRepositoryMock);
        let quizResponse = new QuizResponseC('af1234', 'bad response', 'tester');

        quizResponseService.check(quizResponse).then((response) => {
            assert.equal(response.isValidResponse, false);
            done();
        })
    });

    it('Should preserve other options of response untouched.', function (done) {

        let quizResponseService = new QuizResponseServiceC(quizRepositoryMock, quizResponseRepositoryMock);
        let quizResponse = new QuizResponseC('af1234', 'yes', 'tester');
        quizResponse.id = 'af12345'

        quizResponseService.check(quizResponse).then((response) => {
            assert.equal(response.participant, 'tester');
            assert.equal(response.id, 'af12345');
            assert.equal(response.quizId, 'af1234');
            assert.equal(response.quizResponse, 'yes');
            assert.deepEqual(response.responseNeeded, ['yes', 'yes please']);
            done();
        })
    });


})