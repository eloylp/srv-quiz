'use strict';


module.exports = class Randomizer {

    byLength(length) {
        return Math.floor(Math.random() * length);
    }
}