'use strict';

const QuizMapperC = require('./QuizMapper');

module.exports = class QuizRepository {

    constructor(orm) {
        this._orm = orm
        this._mapper = new QuizMapperC();
    }

    getAll() {

        return new Promise((resolve, reject) => {

            this._orm.find().then((quizes) => {
                resolve(this._mapper.map(quizes));
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getById(id) {

        return new Promise((resolve, reject) => {

            this._orm.findOne({
                id: id
            }).then((quiz) => {

                if (quiz) {
                    resolve(this._mapper.map(quiz))
                } else {
                    let error = new Error("Not Found");
                    error.statusCode = 404;
                    throw error;
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getByTags(tags) {

        return new Promise((resolve, reject) => {

            this._orm.find({
                tags: {$in: tags}
            }).then((quizes) => {
                resolve(this._mapper.map(quizes));
            }).catch((err) => {
                reject(err);
            })
        });
    }

    add(quiz) {

        return new Promise((resolve, reject) => {

            let elements = [];
            let fillOne = function (quiz) {
                return {
                    "quiz": quiz.question,
                    "correct_answers": quiz.correctAnswers,
                    "tags": quiz.tags
                }
            }

            if (Array.isArray(quiz)) {

                for (let i = 0, length = quiz.length; i < length; i++) {

                    elements.push(fillOne(quiz[i]));
                }

            } else {

                elements = fillOne(quiz);
            }

            this._orm.create(elements).then((quiz) => {
                resolve(this._mapper.map(quiz));
            }).catch((err) => {
                reject(err);
            });
        });
    }

    update(quiz) {

        return new Promise((resolve, reject) => {

            let update = {}

            if (quiz.correctAnswers) {
                update.correct_answers = quiz.correctAnswers;
            }

            if (quiz.tags) {
                update.tags = quiz.tags;
            }

            this._orm.update(
                {id: quiz.id},
                update
            ).then((quiz) => {
                resolve(this._mapper.map(quiz));
            }).catch((err) => {
                reject(err);
            });
        });
    }

    remove(quiz) {

        return new Promise((resolve, reject) => {

            this._orm.destroy(
                {id: quiz.id}
            ).then((quiz) => {
                resolve(this._mapper.map(quiz));
            }).catch((err) => {
                reject(err);
            });
        });

    }

    removeAll() {

        return new Promise((resolve, reject) => {

            this._orm.destroy().then((quiz) => {
                resolve(this._mapper.map(quiz));
            }).catch((err) => {
                reject(err);
            });
        });
    }
}