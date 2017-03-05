'use strict';

const QuizC = require('./../domain/Quiz');

module.exports = class QuizMapper {

    map(quiz) {

        return new Promise((resolve, reject) => {

            var fillOne = function (quiz) {

                let mapping = new QuizC(
                    quiz.quiz,
                    quiz.correct_answers,
                    quiz.tags
                );
                mapping.id = quiz.id;

                return mapping;
            }

            if (Array.isArray(quiz)) {

                var mapping = [];
                for (let i = 0, length = quiz.length; i < length; i++) {

                    mapping.push(fillOne(quiz[i]));
                }

            } else {
                var mapping = fillOne(quiz)
            }
            resolve(mapping);
        });
    }
}