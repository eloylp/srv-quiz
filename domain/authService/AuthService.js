'use strict';

module.exports = class AuthService {

    checkToken(input, token) {

        if (input === token) {
            return true
        } else {
            return false;
        }
    }
}