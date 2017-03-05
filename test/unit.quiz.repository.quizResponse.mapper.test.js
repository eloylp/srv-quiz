'use strict';

var assert = require('assert');
var QuizResponseMapperC = require('./../repository/QuizResponseMapper');

var quizResponsePersistenceModel = {

    id: "af1234",
    quiz_id: "af12345",
    quiz_response: "yes",
    participant: "tester",
    is_valid: true,
    response_needed: ['yes', 'yes please'],
    updatedAt: '2017',
    createdAt: '2017'
};

var quizResponsePersistenceModels = [
    {

        id: "af1234",
        quiz_id: "af123456",
        quiz_response: "yes",
        participant: "tester",
        is_valid: true,
        response_needed: ['yes', 'yes please'],
        updatedAt: '2017',
        createdAt: '2017'
    },
    {

        id: "af12345",
        quiz_id: "af1234567",
        quiz_response: "no",
        participant: "tester2",
        is_valid: false,
        response_needed: ['no', 'no please'],
        updatedAt: '22017',
        createdAt: '22017'
    }
];

describe('repository.quizResponse.mapper', function () {

    it('Should return a valid QuizResponse entity from model filled.', function (done) {

        let quizResponseMapper = new QuizResponseMapperC();

        quizResponseMapper.map(quizResponsePersistenceModel).then((quizResponseEntity) => {

            assert.equal('af1234', quizResponseEntity.id);
            assert.equal('af12345', quizResponseEntity.quizId);
            assert.equal('yes', quizResponseEntity.quizResponse);
            assert.equal('tester', quizResponseEntity.participant);
            assert.equal(true, quizResponseEntity.isValidResponse);
            assert.deepEqual(['yes', 'yes please'], quizResponseEntity.responseNeeded);
            done();
        });
    });


    it('Should not return not mapped fields.', function (done) {

        let quizResponseMapper = new QuizResponseMapperC();

        quizResponseMapper.map(quizResponsePersistenceModel).then((quizResponseEntity) => {
            assert.equal(undefined, quizResponseEntity.updatedAt);
            assert.equal(undefined, quizResponseEntity.createdAt);
            done();
        });
    });

    it('Should  take care if multiple are passed.', function (done) {

        let quizResponseMapper = new QuizResponseMapperC();

        quizResponseMapper.map(quizResponsePersistenceModels).then((quizResponseEntity) => {
            assert.equal('af12345', quizResponseEntity[1].id);
            assert.equal('af1234567', quizResponseEntity[1].quizId);
            assert.equal('no', quizResponseEntity[1].quizResponse);
            assert.equal('tester2', quizResponseEntity[1].participant);
            assert.equal(false, quizResponseEntity[1].isValidResponse);
            assert.deepEqual(['no', 'no please'], quizResponseEntity[1].responseNeeded);
            done();
        });
    });
});