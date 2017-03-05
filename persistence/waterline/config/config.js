const config = require('./../../../config/config');
const mongoAdapter = require('sails-mongo');

module.exports = {


    adapters: {
        'default': mongoAdapter,
        mongoAdapter: mongoAdapter
    },

    connections: {
        mongo: {
            adapter: 'mongoAdapter',
            host: config.mongoHost,
            database: 'quiz'
        }
    },

    defaults: {
        migrate: 'alter'
    }

};
