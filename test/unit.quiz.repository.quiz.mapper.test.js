'use strict';

var assert = require('assert');
var QuizMapperC = require('./../repository/QuizMapper');

var quizPersistenceModel = {

    id: "af1234",
    quiz: "this is the quiz ?",
    correct_answers: ['yes', 'yes please'],
    tags: ['tag1', 'tag2'],
    updatedAt: '2017',
    createdAt: '2017'
}

var quizPersistenceModels = [
    {

        id: "af1234",
        quiz: "this is the quiz ?",
        correct_answers: ['yes', 'yes please'],
        tags: ['tag1', 'tag2'],
        updatedAt: '2017',
        createdAt: '2017'
    },
    {

        id: "af12345",
        quiz: "is this another quiz ?",
        correct_answers: ['no', 'no please'],
        tags: ['tag21', 'tag22'],
        updatedAt: '22017',
        createdAt: '22017'
    }
]

describe('repository.quiz.mapper', function () {

    it('Should return a valid Quiz entity from model filled.', function (done) {

        let quizMapper = new QuizMapperC();

        quizMapper.map(quizPersistenceModel).then((quizEntity) => {

            assert.equal('af1234', quizEntity.id);
            assert.equal('this is the quiz ?', quizEntity.question);
            assert.deepEqual(['yes', 'yes please'], quizEntity.correctAnswers);
            assert.deepEqual(['tag1', 'tag2'], quizEntity.tags);
            done();
        });
    });


    it('Should  not return not mapped fields.', function (done) {

        let quizMapper = new QuizMapperC();

        quizMapper.map(quizPersistenceModel).then((quizEntity) => {
            assert.equal(undefined, quizEntity.updatedAt);
            assert.equal(undefined, quizEntity.createdAt);
            done();
        });
    });

    it('Should  take care if multiple are passed.', function (done) {

        let quizMapper = new QuizMapperC();

        quizMapper.map(quizPersistenceModels).then((quizEntity) => {
            assert.equal('af12345', quizEntity[1].id);
            assert.equal('is this another quiz ?', quizEntity[1].question);
            assert.deepEqual(['no', 'no please'], quizEntity[1].correctAnswers);
            assert.deepEqual(['tag21', 'tag22'], quizEntity[1].tags);
            done();
        });
    });
});