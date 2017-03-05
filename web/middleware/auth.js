'use strict';


exports.check = function () {

    return function (req, res, next) {

        let authService = req.app.services.authService;

        if (authService.checkToken(req.header("Authorization"), req.app.get('config')['authToken'])) {
            next();
        } else {
            var err = new Error("Incorrect auth token.");
            err.status = 403;
            next(err);
        }
    };

};