const Waterline = require('waterline');


module.exports = Waterline.Model.extend({

    identity: 'quiz',
    connection: 'mongo',

    attributes: {

        quiz: 'string',
        correct_answers: 'array',
        tags: 'array'
    }

})