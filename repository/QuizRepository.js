'use strict';

const QuizMapperC = require('./QuizMapper');

module.exports = class QuizRepository {

    constructor(orm) {
        this._orm = orm
        this._mapper = new QuizMapperC();
    }

    getAll() {

        return new Promise((resolve, reject) => {

            this._orm.find().then((quizes, err) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(this._mapper.map(quizes))
                }
            });
        });
    }

    getByTags(tags) {

        return new Promise((resolve, reject) => {

            this._orm.find({
                tags: {
                    $in: tags
                }
            }).then((quizes, err) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(this._mapper.map(quizes))
                }
            });
        });
    }

    add(quiz) {

        return new Promise((resolve, reject) => {

            this._orm.create({
                "quiz": quiz.question,
                "correct_answers": quiz.correctAnswers,
                "tags": quiz.tags
            }).then((quiz, err) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(this._mapper.map(quiz));
                }
            });
        });
    }
}