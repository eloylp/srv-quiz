const mongoAdapter = require('sails-mongo');

module.exports = {


    adapters: {
        'default': mongoAdapter,
        mongoAdapter: mongoAdapter
    },

    connections: {
        mongo: {
            adapter: 'mongoAdapter',
            host: 'mongodb',
            database: 'quiz'
        }
    },

    defaults: {
        migrate: 'alter'
    }

};
