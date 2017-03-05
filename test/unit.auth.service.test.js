'use strict';

var assert = require('assert');
var authServiceC = require('./../domain/authService/AuthService');

describe('AuthService', function () {

    it('Should accept token equal to config', function (done) {

        let authService = new authServiceC();
        assert.equal(authService.checkToken('af1234', 'af1234'), true);
        done();
    });

    it('Should reject token not equal to config', function (done) {

        let authService = new authServiceC();
        assert.equal(authService.checkToken('af1234', 'af1234a'), false);
        done();
    });

    it('Should reject token not strictly equal to config', function (done) {

        let authService = new authServiceC();
        assert.equal(authService.checkToken('1234', 1234), false);
        done();
    });
})