const Waterline = require('waterline');


module.exports = Waterline.Collection.extend({

    identity: 'quizResponse',
    connection: 'mongo',

    attributes: {

        quiz_id: 'string',
        quiz_response: 'string',
        participant: 'string',
        is_valid: 'boolean',
        response_needed: 'array'
    }
})