'use strict';

module.exports = (function () {

    let config = {};

    config.xPoweredBy = "quizServer";
    config.authToken = "c40f7f4d574fbd6cdb025ae076701d5a";
    config.environment = process.env.NODE_ENV || 'production';
    config.port = parseInt(process.env.PORT) || 8000;
    return config;

})();