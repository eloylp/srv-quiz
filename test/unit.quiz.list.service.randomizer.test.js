'use strict';

var assert = require('assert');
var RandomizerC = require('./../domain/quizListService/Randomizer');

describe('Randomizer', function () {

    it('Should return not superior of length', function (done) {

        let randomizer = new RandomizerC();
        for (let i = 0; i < 1000; i++) {
            assert.equal(randomizer.byLength(4) < 4, true);
        }
        done();
    });
})