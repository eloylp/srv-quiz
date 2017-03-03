exports.check = function () {

    return function (req, res, next) {

        if (req.app.get('config')['authToken'] === req.header("Authorization")) {
            next();
        } else {
            var err = new Error("Incorrect auth token.");
            err.status = 403;
            next(err);
        }
    };

};