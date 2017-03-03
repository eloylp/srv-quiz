'use strict';


const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const index = require("./web/routes/index");
const quiz = require("./web/routes/quiz");
const config = require("./config/config");

const app = express();

app.set('config', config);
app.set('port', config.port);
app.set('env', config.environment);
app.set('json spaces', config.jsonSpaces);
app.set('x-powered-by', config.xPoweredBy);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/quiz', quiz);


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

module.exports = app;
