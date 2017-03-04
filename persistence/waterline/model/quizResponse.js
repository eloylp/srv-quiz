const Waterline = require('waterline');


module.exports = Waterline.Model.extend({

    identity: 'quizResponse',
    connection: 'mongo',

    attributes: {

        quizId: 'string',
        wasCorrect: 'boolean',
        response: 'string',
        participant: 'string'
    }
})