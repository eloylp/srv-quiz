'use strict';

module.exports = class QuizRepository {

    constructor(orm) {
        this._orm = orm
    }

    get() {

    }

    add(quiz) {

        return this._orm.create({
            "quiz": quiz.question,
            "correct_answers": quiz.correctAnswers,
            "tags": quiz.tags
        });
    }
}