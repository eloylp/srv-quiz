'use strict';


const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config/config");
const ServiceBuilderC = require("./domain/ServiceBuilder");
const ServiceBuilder = new ServiceBuilderC();

const app = express();

app.set('config', config);
app.set('port', config.port);
app.set('env', config.environment);
app.set('json spaces', config.jsonSpaces);
app.set('x-powered-by', config.xPoweredBy);


app.use(logger('dev'));
app.use(bodyParser.json());

const index = require("./web/routes/index");
const quizzes = require("./web/routes/quizzes");
const quizCheck = require("./web/routes/quizResponse");
const quizzesStats = require("./web/routes/quizzesStats");

app.use('/', index);
app.use('/quizzes', quizzes);
app.use('/quizCheck', quizCheck);
app.use('/quizzes/stats', quizzesStats);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/// Ensure services and connections are up until server starts.
module.exports = ServiceBuilder.build().then((services) => {

    app.services = services;
    return app;
}, (err) => {
    throw err;
});
