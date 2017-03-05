'use strict';

var assert = require('assert');
var QuizListServiceC = require('./../domain/quizListService/QuizListService');

var repoWithQuizzesMock = {
    getByTags: function () {

        return new Promise((resolve) => {
            let quiz = {
                correctAnswers: ['ans1', 'ans2']
            }
            resolve([quiz, quiz]);
        });
    }
}

var repoWithOutQuizzesMock = {
    getByTags: function () {

        return new Promise((resolve) => {
            resolve([]);
        });
    }
}

describe('QuizListService.getByTagsRandomized', function () {

    it('Should return empty array when no quizzes.', function (done) {

        let quizListService = new QuizListServiceC(repoWithOutQuizzesMock);
        quizListService.getByTagsRandomized('sport').then((response) => {
            assert.equal(response.length, [].length);
            done();
        })
    });

    it('Should return quiz without responses when quizzes.', function (done) {

        let quizListService = new QuizListServiceC(repoWithQuizzesMock);
        quizListService.getByTagsRandomized('sport').then((response) => {
            assert.deepEqual(response, {correctAnswers: []});
            done();
        });
    });
})