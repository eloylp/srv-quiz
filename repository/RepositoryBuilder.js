'use strict';

const QuizRepositoryC = require('./QuizRepository');
const QuizMapperC = require('./QuizMapper');

const QuizResponseRepositoryC = require('./QuizResponseRepository');
const QuizResponseMapperC = require("./QuizResponseMapper");


const Waterline = require('waterline');
const WaterlineConfig = require('./../persistence/waterline/config/config');
const WaterlineQuizModel = require('./../persistence/waterline/model/quiz');
const WaterlineQuizResponseModel = require('./../persistence/waterline/model/quizResponse');

module.exports = class RepositoryBuilder {

    build() {

        return new Promise((resolve, reject) => {

            let orm = new Waterline();

            orm.loadCollection(WaterlineQuizModel);
            orm.loadCollection(WaterlineQuizResponseModel);

            orm.initialize(WaterlineConfig, function (err, models) {

                if (err) {
                    reject(err);
                } else {
                    resolve({
                        quiz: new QuizRepositoryC(models.collections.quiz, new QuizMapperC()),
                        quizResponse: new QuizResponseRepositoryC(models.collections.quizresponse, new QuizResponseMapperC())
                    });
                }
            });

        });
    }
}