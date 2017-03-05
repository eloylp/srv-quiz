'use strict';

module.exports = (function () {

    let config = {};

    config.xPoweredBy = false;
    config.jsonSpaces = 40;
    config.authToken = process.env.AUTH_TOKEN || "c40f7f4d574fbd6cdb025ae076701d5a";
    config.environment = process.env.NODE_ENV || 'production';
    config.mongoHost = process.env.MONGO_HOST || 'localhost';
    config.port = parseInt(process.env.PORT) || 8000;
    return config;

})();