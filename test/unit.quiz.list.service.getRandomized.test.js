'use strict';

var assert = require('assert');
var QuizListServiceC = require('./../domain/quizListService/QuizListService');

var repoWithQuizzesMock = {
    getAll: function () {

        return new Promise((resolve) => {
            let quiz = {
                correctAnswers: ['ans1', 'ans2']
            }
            resolve([quiz, quiz]);
        });
    }
}

var repoWithOutQuizzesMock = {
    getAll: function () {

        return new Promise((resolve) => {
            resolve([]);
        });
    }
}

describe('QuizListService.getRandomized', function () {

    it('Should return empty array when no quizzes.', function (done) {

        let quizListService = new QuizListServiceC(repoWithOutQuizzesMock);
        quizListService.getRandomized().then((response) => {
            assert.equal(response.length, [].length);
            done();
        })
    });

    it('Should return quiz without responses when quizzes.', function (done) {

        let quizListService = new QuizListServiceC(repoWithQuizzesMock);
        quizListService.getRandomized().then((response) => {
            assert.deepEqual(response, {correctAnswers: []});
            done();
        });
    });
})