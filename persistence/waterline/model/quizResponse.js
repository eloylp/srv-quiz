const Waterline = require('waterline');


module.exports = Waterline.Collection.extend({

    identity: 'quizResponse',
    connection: 'mongo',

    attributes: {

        quizId: 'string',
        wasCorrect: 'boolean',
        response: 'string',
        participant: 'string'
    }
})