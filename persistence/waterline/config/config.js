const mongoAdapter = require('sails-mongo');

module.exports = {

    // Setup Adapters
    // Creates named adapters that have been required
    adapters: {
        'default': mongoAdapter,
        mongoAdapter: mongoAdapter
    },

    // Build Connections Config
    // Setup connections using the named adapter configs
    connections: {
        mongoAdapter: {
            adapter: 'mongo',
            host: 'mongodb',
            database: 'quiz'
        }
    },

    defaults: {
        migrate: 'alter'
    }

};
